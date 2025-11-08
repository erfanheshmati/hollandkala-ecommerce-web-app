'use client';

import { TicketStatusProps, ProfileTicketProps } from '@/types';
import { HiOutlineFolderOpen } from 'react-icons/hi';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { CgCloseR } from 'react-icons/cg';
import { FiUser } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';

const statusText: Record<TicketStatusProps, string> = {
  answered: 'پاسخ داده شده',
  reviewing: 'در حال بررسی',
  closed: 'بسته شده',
};

const statusColor: Record<TicketStatusProps, string> = {
  answered: 'bg-green-100 text-green-600',
  reviewing: 'bg-gray-200 text-gray-800',
  closed: 'bg-gray-300 text-gray-400',
};

export default function TicketCard(ticket: ProfileTicketProps) {
  const { id, title, date, status, description, supportResponse } = ticket;

  const [isClosed, setIsClosed] = useState(false);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [isReplyAccordionOpen, setIsReplyAccordionOpen] = useState(false);
  const [replyText, setReplyText] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const hasSupportResponse = !!supportResponse;
  const canSendResponse = hasSupportResponse && status === 'answered';

  const handleCloseTicket = () => {
    setIsClosed(true);
  };

  const handleToggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
    // Close reply accordion when viewing response
    if (!isAccordionOpen) {
      setIsReplyAccordionOpen(false);
    }
  };

  const handleToggleReplyAccordion = () => {
    setIsReplyAccordionOpen(!isReplyAccordionOpen);
    // Open support response accordion if closed
    if (!isAccordionOpen && !isReplyAccordionOpen) {
      setIsAccordionOpen(true);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const file = e.dataTransfer.files?.[0];
    if (file) {
      // Check file type
      const fileExtension = file.name.split('.').pop()?.toLowerCase();
      if (fileExtension === 'csv' || fileExtension === 'pdf') {
        setSelectedFile(file);
      } else {
        alert('لطفاً فقط فایل‌های CSV یا PDF را آپلود کنید.');
      }
    }
  };

  const handleSubmitReply = () => {
    // Handle reply submission
    console.log('Reply submitted:', { replyText, selectedFile });
    // Reset form
    setReplyText('');
    setSelectedFile(null);
    setIsReplyAccordionOpen(false);
  };

  // Hide the ticket if it's closed
  if (isClosed) {
    return null;
  }

  return (
    <div className='flex flex-col gap-4 p-3 lg:p-5 border border-primary/20 rounded-xl'>
      {/* Header */}
      <div className='flex flex-wrap items-center justify-between gap-4'>
        {/* Title */}
        <h3 className='font-bold text-xl'>{title}</h3>
        {/* Badge & Date */}
        <div className='flex items-center mr-auto gap-2 sm:gap-4'>
          {/* Status Badge */}
          <div
            className={`flex items-center justify-center px-4 py-1 rounded-[20px] text-sm ${statusColor[status]}`}
          >
            {statusText[status]}
          </div>
          {/* Separator */}
          <span className='text-primary/30'>&#124;</span>
          {/* Date */}
          <div className='flex items-center gap-1 text-sm font-medium'>
            <span className='text-foreground/60'>تاریخ:</span>
            <span>{date}</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className='font-medium text-foreground/55 text-justify'>
        {description}
      </div>

      {/* Action Buttons */}
      {status !== 'closed' && (
        <div className='flex items-center gap-2'>
          {/* View Response Button - Only for answered tickets with support response */}
          {status === 'answered' && hasSupportResponse && (
            <button
              type='button'
              onClick={handleToggleAccordion}
              className='btn-secondary flex items-center justify-center gap-2 py-2 rounded-2xl w-full md:w-fit'
            >
              <span className='font-medium'>مشاهده پاسخ</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  isAccordionOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
          )}
          {/* Close Ticket Button - Always shown for non-closed tickets */}
          <button
            type='button'
            onClick={handleCloseTicket}
            className='btn-tertiary flex items-center justify-center gap-2 py-2 rounded-2xl w-full md:w-fit'
          >
            <CgCloseR className='w-4 h-4 text-primary' />
            <span className='font-medium text-primary'>بستن تیکت</span>
          </button>
        </div>
      )}

      {/* Support Response - Accordion */}
      {hasSupportResponse && isAccordionOpen && (
        <div className='flex flex-col gap-4 p-4 bg-secondary rounded-xl'>
          {/* Support Header */}
          <div className='flex items-center gap-2'>
            <div className='flex items-center justify-center w-11 h-11 rounded-full bg-background'>
              <FiUser className='w-6 h-6 text-primary' />
            </div>
            <span className='font-medium text-primary'>
              {supportResponse.name}
            </span>
          </div>
          {/* Support Response Text */}
          <div className='font-medium text-justify'>{supportResponse.text}</div>

          {/* Send Response Button - Only for answered tickets with support response */}
          {canSendResponse && (
            <div className='flex justify-end'>
              <button
                type='button'
                onClick={handleToggleReplyAccordion}
                className='btn-primary py-2 rounded-2xl'
              >
                <span>ارسال پاسخ</span>
              </button>
            </div>
          )}

          {/* Reply Form Accordion */}
          {isReplyAccordionOpen && canSendResponse && (
            <div className='flex flex-col gap-4'>
              <div className='flex flex-col lg:flex-row justify-between gap-2'>
                {/* توضیحات (Description) */}
                <div className='w-full md:w-full lg:w-1/2'>
                  <textarea
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder='توضیحات:'
                    rows={3}
                    className='input w-full bg-background h-full rounded-xl p-2 resize-none'
                  />
                </div>

                {/* ارسال فایل (File Upload) */}
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`w-full md:w-full lg:w-1/2 flex flex-col justify-between gap-6 border border-dashed border-primary rounded-xl p-2 effect ${
                    isDragging ? 'bg-primary/10' : 'bg-white'
                  }`}
                >
                  <div className='flex items-center justify-between gap-4'>
                    <div className='flex items-center gap-1 text-sm overflow-hidden'>
                      <HiOutlineFolderOpen className='w-8 h-8 text-primary pb-1' />
                      <span className='line-clamp-1'>
                        {selectedFile
                          ? selectedFile.name
                          : 'فایل را بکشید و رها کنید.'}
                      </span>
                      {selectedFile && (
                        <button
                          type='button'
                          onClick={() => setSelectedFile(null)}
                          className='text-red-500 hover:text-red-700 cursor-pointer effect'
                        >
                          <IoMdClose className='w-5 h-5 mb-1' />
                        </button>
                      )}
                    </div>
                    <input
                      type='file'
                      id={`file-upload-${id}`}
                      onChange={handleFileChange}
                      accept='.csv,.pdf'
                      className='hidden'
                    />
                    <label
                      htmlFor={`file-upload-${id}`}
                      className='btn-secondary p-2 rounded-xl text-sm font-medium shrink-0'
                    >
                      بارگذاری فایل
                    </label>
                  </div>
                  <div className='text-xs font-medium text-foreground/50'>
                    حداکثر حجم: 700 مگابایت, فرمت فایل : CSV , PDF
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className='flex justify-end gap-2'>
                <button
                  type='button'
                  onClick={() => {
                    setIsReplyAccordionOpen(false);
                    setReplyText('');
                    setSelectedFile(null);
                  }}
                  className='btn-secondary py-2 rounded-xl'
                >
                  <span>انصراف</span>
                </button>
                <button
                  type='button'
                  onClick={handleSubmitReply}
                  disabled={!replyText.trim()}
                  className='btn-primary py-2 rounded-xl'
                >
                  <span>ارسال</span>
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
