import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function DocumentViewerPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [url, setUrl] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const docUrl = params.get('url');
    if (docUrl) {
      setUrl(docUrl);
    }
  }, [location]);

  return (
    <div className="flex flex-col h-[calc(100vh-120px)] w-full -mt-[5px]">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-zinc-text-secondary hover:text-primary transition-colors hover-target group font-label-mono text-label-mono"
        >
          <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
          Back
        </button>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-primary hover:text-primary-fixed transition-colors hover-target font-label-mono text-label-mono"
        >
          Open Original
          <span className="material-symbols-outlined text-[16px]">open_in_new</span>
        </a>
      </div>

      <div className="flex-grow w-full glass-panel rounded-xl overflow-hidden border border-zinc-border animate-fade-up">
        {url ? (
          <iframe
            src={url}
            className="w-full h-full border-0"
            title="Document Viewer"
            allow="autoplay"
          ></iframe>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-zinc-text-secondary font-label-mono text-label-mono">
            No document URL provided.
          </div>
        )}
      </div>
    </div>
  );
}
