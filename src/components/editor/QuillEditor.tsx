import ReactQuill from 'react-quill';
import { useMemo, useRef, useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import { api } from '../../configs/AxiosConfig';

interface QuillEditorProps {
  onChange?: (value: string) => void;
  initialValue?: string;
}

const QuillEditor = ({ onChange, initialValue }: QuillEditorProps) => {
  const [value, setValue] = useState<string>('');
  const quillRef = useRef<any>(null);

  const imageHandler = () => {
    const input = document.createElement('input');

    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();
    input.onchange = async () => {
      const file: any = input && input.files ? input.files[0] : null;
      const formData = new FormData();
      formData.append('image', file);
      const response = await api.post<{ url: string }>('/images', formData);
      const url = `${process.env.REACT_APP_HOST}${response.data.url}`;

      const editor = quillRef.current.getEditor();
      const range = editor.getSelection();
      editor.insertEmbed(range.index, 'image', url);
    };
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: '1' }, { header: '2' }],
          [{ size: [] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ list: 'ordered' }, { list: 'bullet' }, { align: [] }],
          ['image'],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    }),
    [],
  );

  return (
    <>
      <ReactQuill
        ref={quillRef}
        theme="snow"
        value={value || initialValue}
        onChange={(value) => {
          setValue(value);
          if (onChange) {
            onChange(value);
          }
        }}
        modules={modules}
      />
    </>
  );
};

export default QuillEditor;
