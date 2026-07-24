"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import BackButton from "../atoms/BackButton";

/* Google Drive view link -> direct download link.
   Local /public PDFs pass through unchanged. */
const toDownloadUrl = (route) => {
  const match = route.match(/\/file\/d\/([^/]+)/);
  return match
    ? `https://drive.google.com/uc?export=download&id=${match[1]}`
    : route;
};

const DownloadIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const Spinner = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    className="h-5 w-5 animate-spin"
    aria-hidden="true"
  >
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="3"
      className="opacity-25"
    />
    <path
      d="M12 2a10 10 0 0 1 10 10"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

const PaperList = ({ papers }) => {
  const [busy, setBusy] = useState(null);
  const frameRef = useRef(null);

  const handleDownload = (route, key) => {
    setBusy(key);
    // Hidden iframe fetches the file — the browser's attachment header
    // starts the download without opening a blank tab or leaving the page.
    if (frameRef.current) {
      frameRef.current.src = toDownloadUrl(route);
    }
    setTimeout(() => setBusy(null), 2500);
  };

  return (
    <>
      <ul className="w-full space-y-1.5">
        {papers.map(({ label, route }, index) => {
          const key = `${label}-${index}`;
          const isBusy = busy === key;

          return (
            <li
              key={key}
              className="group flex items-center justify-between gap-2 rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-[#CDE9F8] hover:bg-[#EBF7FF]"
            >
              {/* Serial number + name -> view the PDF */}
              <Link
                href={route}
                target="_blank"
                rel="noopener noreferrer"
                title={`View ${label}`}
                className="flex flex-1 items-start gap-3 text-base leading-6 text-[#073B4C] hover:text-blue-600"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EBF7FF] text-xs font-semibold text-[#073B4C] group-hover:bg-white">
                  {index + 1}
                </span>
                <span className="break-words hover:underline">{label}</span>
              </Link>

              {/* Download icon -> downloads in the same page */}
              <button
                type="button"
                onClick={() => handleDownload(route, key)}
                disabled={isBusy}
                title={isBusy ? "Downloading…" : `Download ${label}`}
                aria-label={`Download ${label}`}
                className="shrink-0 rounded-md p-1.5 text-blue-600 transition-all hover:bg-white hover:text-[#073B4C] active:scale-90 disabled:cursor-wait disabled:text-gray-400"
              >
                {isBusy ? <Spinner /> : <DownloadIcon />}
              </button>
            </li>
          );
        })}
      </ul>

      <iframe ref={frameRef} title="downloader" className="hidden" />
    </>
  );
};

const SectionHeading = ({ title }) => (
  <div className="rounded-xl bg-[#EBF7FF] p-3 shadow-three">
    <h4 className="text-xl font-bold text-[#073B4C] md:text-2xl">{title}</h4>
  </div>
);

const QuestionPaper = () => {
  return (
    <main className="py-6 container">
      <BackButton />

      <h3 className="mt-6 text-center text-2xl font-bold text-[#073B4C] md:text-3xl">
        Mock Test Paper
      </h3>
      <p className="mt-2 text-center text-base text-gray-600">
        Click the paper name to view it, or the icon to download.
      </p>

      {/* TOP ROW — Stitching Operator (left) | Pre-Assembly Operator (right) */}
      <section className="mt-5 grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
        {mockTestPapers.map(({ category, papers }) => (
          <div key={category} className="space-y-4">
            <SectionHeading title={category} />
            <PaperList papers={papers} />
          </div>
        ))}
      </section>

      {/* BOTTOM — Model Question Paper, centred */}
      <section className="mt-12 flex justify-center">
        <div className="w-full max-w-xl space-y-4">
          <SectionHeading title="Model Question Paper" />
          <PaperList papers={trainingMaterials} />
        </div>
      </section>
    </main>
  );
};

export default QuestionPaper;

const trainingMaterials = [
  {
    label: "Basic closing Operator- Practical",
    route: "/model-question/Basic closing Operator- Practical.pdf",
  },
  {
    label: "Stitcher footwear – for offline QB English",
    route: "/model-question/Stitcher footwear - for offline QB English.pdf",
  },
  {
    label: "Stitcher footwear – for offline QB Hindi",
    route: "/model-question/Stitcher footwear - for offline QB Hindi.pdf",
  },
];

const mockTestPapers = [
  {
    category: "Stitching Operator",
    papers: [
      {
        label: "Stitching Operator_Mock_Paper_LSS_N5501",
        route:
          "https://drive.google.com/file/d/1Lsq1J3H8gNCprFUBMaTTP-hMog08zUFb/view?usp=sharing",
      },
      {
        label: "Stitching Operator_Mock_Paper_LSS_N2202",
        route:
          "https://drive.google.com/file/d/1fi1lNtfBXdBxJJ8plgUQrBTxrxuZFhZj/view?usp=sharing",
      },
      {
        label: "Stitching Operator_Mock_Paper_LSS_N2203",
        route:
          "https://drive.google.com/file/d/1qdS3_GVxDlPLsE-4S6DZsWotfxH4n-jW/view?usp=sharing",
      },
      {
        label: "Stitching Operator_Mock_Paper_LSS_N2204",
        route:
          "https://drive.google.com/file/d/1ZmBsGvRHcaWyxzWdeSVeM6blf5JIEGns/view?usp=sharing",
      },
      {
        label: "Stitching Operator_Mock_Paper_LSS_N5805",
        route:
          "https://drive.google.com/file/d/1hbj_I4llMX1mpa1f2wLGsqmqVWNiLvWC/view?usp=sharing",
      },
      {
        label: "Stitching Operator_Mock_Paper_LSS_N8601",
        route:
          "https://drive.google.com/file/d/1oNdj-waHFyd-2ab26GFHYNbNPSmb4_b1/view?usp=sharing",
      },
      {
        label: "Stitching Operator_Mock_Paper_DGT_VSQ_N0101",
        route:
          "https://drive.google.com/file/d/1fu46uhNRRG3CuYFAxqFMmEJM2xWP-AvN/view?usp=sharing",
      },
    ],
  },
  {
    category: "Pre-Assembly Operator",
    papers: [
      {
        label: "Pre-Assembly Operator-Mock_Paper_LSS_N2601",
        route:
          "https://drive.google.com/file/d/1qkANyhMCkELHf6F4XYmBhRfhAXlCVfKX/view?usp=sharing",
      },
      {
        label: "Pre-Assembly Operator-Mock_Paper_LSS_N2603",
        route:
          "https://drive.google.com/file/d/1oCMJuK3ANxNx3mHmEe7P6Ld3k1p89lQT/view?usp=sharing",
      },
      {
        label: "Pre-Assembly Operator-Mock_Paper_LSS_N2604",
        route:
          "https://drive.google.com/file/d/1FhQXL9DbENnj0HRLOzWctCu77ST08OcS/view?usp=sharing",
      },
      {
        label: "Pre-Assembly Operator-Mock_Paper_LSS_N2606",
        route:
          "https://drive.google.com/file/d/1L4bSvr039wSnKza2QvU-DtnAGNd31QA1/view?usp=sharing",
      },
      {
        label: "Pre-Assembly Operator-Mock_Paper_LSS_N2607",
        route:
          "https://drive.google.com/file/d/1lEb-KA4r67CNXwVKrInrrUIaG25jVVCa/view?usp=sharing",
      },
      {
        label: "Pre-Assembly Operator-Mock_Paper_LSS_N2608",
        route:
          "https://drive.google.com/file/d/1MPwoBPQrB4fZCClDW2gzCTlKhrhyPdDW/view?usp=sharing",
      },
      {
        label: "Pre-Assembly Operator-Mock_Paper_LSS_N2609",
        route:
          "https://drive.google.com/file/d/1G2GwZTG8wOteDSUFHI6nGsQ4lIEgtN7W/view?usp=sharing",
      },
      {
        label: "Pre-Assembly Operator-Mock_Paper_LSS_N2610",
        route:
          "https://drive.google.com/file/d/1pWc6HObtxnTbOmLQjovSuwAfeXTdflj-/view?usp=sharing",
      },
      {
        label: "Pre-Assembly Operator-Mock_Paper_LSS_N3006",
        route:
          "https://drive.google.com/file/d/118qOtFGScU3cjPKsuoHdrVSRgGf1XwGm/view?usp=sharing",
      },
      {
        label: "Pre-Assembly Operator-Mock_Paper_LSS_N8601",
        route:
          "https://drive.google.com/file/d/17wau0ToD_IrslvUMHkXWF_HGAS42jZ_E/view?usp=sharing",
      },
      {
        label: "Pre-Assembly Operator-Mock_Paper_DGT_VSQ_N0101",
        route:
          "https://drive.google.com/file/d/19lAuRKacQg4BSpP3VmwTaad4XbO-vl4_/view?usp=sharing",
      },
    ],
  },
];