import PrimaryButton from "../base/PrimaryButton";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Editor = () => {
  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  return (
    <section className="m-[30px] border border-b-black-100 h-screen p-[38px] flex flex-col gap-3">
      <PrimaryButton value="Publish" handleClick={() => {}} />
      <ReactQuill theme="snow" modules={modules} />
    </section>
  );
};

export default Editor;
