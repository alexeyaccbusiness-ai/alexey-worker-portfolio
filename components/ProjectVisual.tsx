type ProjectVisualProps = {
  tone: string;
  title: string;
  imageAlt: string;
  visualStatus: string;
  visualLabels: readonly string[];
};

function PinkClubDrawing() {
  return (
    <svg className="project-drawing" viewBox="0 0 640 560" aria-hidden="true">
      <g className="project-drawing__grid">
        <path d="M34 138H166M474 138H606M38 412H170M470 412H602" />
        <circle cx="54" cy="138" r="4" /><circle cx="586" cy="138" r="4" />
        <circle cx="54" cy="412" r="4" /><circle cx="586" cy="412" r="4" />
      </g>
      <g className="project-drawing__device draw-stroke">
        <rect x="198" y="38" width="244" height="484" rx="48" />
        <rect x="211" y="52" width="218" height="456" rx="38" />
        <path d="M280 67h80c10 0 18 8 18 18s-8 18-18 18h-80c-10 0-18-8-18-18s8-18 18-18Z" />
        <circle cx="363" cy="85" r="4" />
        <path className="project-drawing__heart" d="M320 277c-57-32-82-61-82-99 0-32 22-55 52-55 17 0 31 8 40 22 9-14 23-22 40-22 30 0 52 23 52 55 0 38-25 67-102 99Z" />
        <path d="M262 318h116M280 346h80" />
      </g>
      <text className="project-drawing__word" x="320" y="393" textAnchor="middle">PINK CLUB</text>
      <g className="project-drawing__cards draw-stroke">
        <rect x="237" y="424" width="45" height="45" rx="11" />
        <rect x="297" y="424" width="45" height="45" rx="11" />
        <rect x="357" y="424" width="45" height="45" rx="11" />
        <path d="M251 446h17M319 437v18M310 446h18M369 446l8 8 14-17" />
      </g>
      <circle className="project-drawing__pulse project-drawing__pulse--one" cx="121" cy="138" r="5" />
      <circle className="project-drawing__pulse project-drawing__pulse--two" cx="522" cy="412" r="5" />
    </svg>
  );
}

function PinkScoutDrawing() {
  return (
    <svg className="project-drawing" viewBox="0 0 640 560" aria-hidden="true">
      <g className="project-drawing__sources draw-stroke">
        <rect x="42" y="92" width="128" height="76" rx="16" />
        <circle cx="69" cy="120" r="10" /><path d="M59 120h20M69 110c5 6 5 14 0 20M69 110c-5 6-5 14 0 20M91 115h53M91 134h38M65 151h78" />
        <rect x="470" y="116" width="128" height="76" rx="16" />
        <circle cx="499" cy="145" r="9" /><path d="M514 140h58M514 155h40M493 176h84" />
        <rect x="58" y="386" width="132" height="74" rx="16" />
        <path d="M79 408h24v18H79zM83 413l8 6 8-6M116 410h44M79 443h86" />
      </g>
      <g className="project-drawing__routes draw-stroke">
        <path d="M170 130C230 130 224 220 276 228" />
        <path d="M470 154C416 154 418 216 374 231" />
        <path d="M190 423C244 414 244 371 282 350" />
      </g>
      <g className="project-drawing__scout draw-stroke">
        <path className="project-drawing__ponytail" d="M374 170c35 2 50 27 36 49 24 12 25 39 4 57-13 11-29 13-41 6" />
        <path d="M270 132c9-45 89-56 107 0l32 10c-23 21-153 22-176 0l37-10Z" />
        <path d="M283 132c18-16 58-17 80 0" />
        <path d="M281 153c-25 25-29 69-8 99M373 153c27 22 32 65 8 99" />
        <path d="M272 222c-15 32-11 59 10 80M382 222c15 32 11 59-10 80" />
        <path d="M276 166c0 62 17 92 51 92s52-30 52-92" />
        <path d="M278 184c-18 1-19 28 2 33M377 184c18 1 19 28-2 33" />
        <path d="M298 194q7-6 14 0M342 194q7-6 14 0M318 225c6 6 14 6 20 0" />
        <path d="M268 282c-42 22-60 75-60 137M387 282c42 22 60 75 60 137" />
        <path d="M303 263l24 18 24-18 13 21-37 35-37-35 13-21Z" />
        <path d="M278 286l49 33 49-33M327 319v169" />
        <path d="M249 472c18-64 15-122 29-199M405 472c-18-64-15-122-29-199" />
        <path d="M277 348h100v98c-30 20-70 20-100 0v-98Z" />
        <path d="M297 348v98M357 348v98M277 378h100" />
        <circle cx="409" cy="320" r="45" />
        <circle cx="409" cy="320" r="31" />
        <path d="M442 353l45 45" />
      </g>
      <g className="project-drawing__signal draw-stroke">
        <circle cx="327" cy="378" r="14" /><path d="M320 378l5 5 10-12" />
      </g>
      <circle className="project-drawing__pulse project-drawing__pulse--one" cx="210" cy="169" r="5" />
      <circle className="project-drawing__pulse project-drawing__pulse--two" cx="430" cy="191" r="5" />
      <circle className="project-drawing__pulse project-drawing__pulse--three" cx="235" cy="390" r="5" />
      <text className="project-drawing__caption" x="455" y="455">SCOUT / DATA FOUND</text>
    </svg>
  );
}

function AiDevelopmentDrawing() {
  return (
    <svg className="project-drawing" viewBox="0 0 640 560" aria-hidden="true">
      <g className="project-drawing__ai draw-stroke">
        <rect x="213" y="48" width="214" height="128" rx="24" />
        <circle cx="260" cy="105" r="22" /><path d="M251 105h18M260 96v18" />
        <path d="M300 91h92M300 112h67M300 133h82" />
        <rect x="55" y="309" width="232" height="168" rx="24" />
        <circle cx="95" cy="350" r="18" /><path d="M87 350h16M95 342v16" />
        <path d="M130 337h109M130 359h78M84 399h154M84 423h126M84 447h143" />
        <rect x="353" y="309" width="232" height="168" rx="24" />
        <circle cx="393" cy="350" r="18" /><path d="M384 350l7 7 13-15" />
        <path d="M428 337h109M428 359h73M383 407l24 24 48-57" />
        <circle cx="494" cy="407" r="31" /><path d="M478 407l11 11 23-27" />
        <path d="M320 176v65M320 241c-72 0-149 13-149 68M320 241c72 0 149 13 149 68" />
      </g>
      <g className="project-drawing__labels">
        <text x="320" y="202" textAnchor="middle">AI / LEAD</text>
        <text x="171" y="510" textAnchor="middle">AI / CODE</text>
        <text x="469" y="510" textAnchor="middle">QA / PASS</text>
      </g>
      <circle className="project-drawing__pulse project-drawing__pulse--one" cx="320" cy="218" r="6" />
      <circle className="project-drawing__pulse project-drawing__pulse--two" cx="223" cy="265" r="6" />
      <circle className="project-drawing__pulse project-drawing__pulse--three" cx="417" cy="265" r="6" />
    </svg>
  );
}

export function ProjectVisual({ tone, title, imageAlt, visualStatus, visualLabels }: ProjectVisualProps) {
  const Drawing = tone === "pink" ? PinkClubDrawing : tone === "blue" ? PinkScoutDrawing : AiDevelopmentDrawing;

  return (
    <div className={`project-ui project-ui--${tone}`} role="img" aria-label={imageAlt}>
      <div className="project-ui__chalk" aria-hidden="true" />
      <div className="project-ui__scan" aria-hidden="true" />
      <div className="project-ui__status" aria-hidden="true"><span><i />{visualStatus}</span><small>AW / SYSTEM</small></div>
      <Drawing />
      <div className="project-ui__nodes" aria-hidden="true">
        {visualLabels.map((label, index) => <span key={label} className={`project-ui__node project-ui__node--${index + 1}`}><i />{label}</span>)}
      </div>
      <span className="project-ui__label" aria-hidden="true">{title}</span>
    </div>
  );
}
