import React from 'react';

const CopyToClipboardPage = () => {
  const { ref, copied, onCopy } = useClipboard({ duration: 4000 });
  return (
    <div className="mb-8   border-2 border-white bg-gray-800">
        <div className='text-white mt-5 ml-5'>
            SHARE THIS LINK WITH YOUR FRIENDS AND ASK THEM TO REGISTER USING THIS LINK TO GET AWARDS.
        </div>
        <div className=''>
      <button
        className="text-white ml-5 mt-4 focus:outline-none shadow font-medium px-6 py-1 text-sm bg-blue-700"
        onClick={onCopy}
      >
        {copied ? 'Copied!' : 'Copy Referal Link'}
      </button>
      <div ref={ref} className="mt-4">
        <p className='hidden'>
         <strong>www.Linkappers.here</strong>
        </p>
      </div></div>
      
    </div>
  );
};

/* logic */
const useClipboard = (props) => {
  const [copied, setCopied] = React.useState(false);
  const ref = React.useRef();
  const resetCopy = React.useRef();

  const onCopy = React.useCallback(() => {
    navigator.clipboard
      .writeText(ref.current?.innerText)
      .then(() => setCopied(true));
  }, [ref]);

  React.useEffect(() => {
    if (copied) {
      resetCopy.current = setTimeout(
        () => setCopied(false),
        props?.duration || 3000,
      );
    }

    return () => {
      clearTimeout(resetCopy.current);
    };
  }, [copied, props.duration]);

  return { copied, ref, onCopy };
};

export default CopyToClipboardPage;