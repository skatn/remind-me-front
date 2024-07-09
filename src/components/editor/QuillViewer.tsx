import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

interface QuillViewerProps {
  value: string;
}

const QuillViewer = ({ value }: QuillViewerProps) => {
  return <ReactQuill theme="bubble" value={value} readOnly />;
};

export default QuillViewer;
