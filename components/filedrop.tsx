// FileDrop.tsx
import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import classNames from 'classnames';
import 'tailwindcss/tailwind.css';
import type { TauriExtendedFile } from 'tauri-extended-file';

interface FileDropProps {
  onFileDropped: (file: File) => void;
}

const FileDrop: React.FC<FileDropProps> = ({ onFileDropped }) => {
  const [filePath, setFilePath] = useState('');

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0] as TauriExtendedFile;
        onFileDropped(file);

        if ('path' in file) {
          setFilePath(file.path);
        } else {
          setFilePath(URL.createObjectURL(file));
        }
      }
    },
    [onFileDropped]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className={classNames(
        'grid grid-cols-1 items-center mt-16 border border-dashed p-6 text-center rounded',
        isDragActive
          ? 'bg-gray-300 border-gray-400'
          : 'cursor-pointer bg-gray-800 border-gray-500'
      )}>
      <input {...getInputProps()} />
      <div>
        {isDragActive ? (
          <p>Drop the file here...</p>
        ) : (
          <p className='text-white'>
            Drag and drop a file here, or click to select a file
          </p>
        )}
        {filePath && (
          <div className='mt-3'>
            <p className='text-gray-400'>File path: {filePath}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileDrop;
