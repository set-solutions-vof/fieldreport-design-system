"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  AccuracyChip: () => AccuracyChip,
  ApprovalPill: () => ApprovalPill,
  Badge: () => Badge,
  Button: () => Button,
  CalmTimeline: () => CalmTimeline,
  Card: () => Card,
  CardFooter: () => CardFooter,
  CardHeader: () => CardHeader,
  CardSubtitle: () => CardSubtitle,
  CardTitle: () => CardTitle,
  CitationChip: () => CitationChip,
  Divider: () => Divider,
  DocumentPaper: () => DocumentPaper,
  DocumentPaperBody: () => DocumentPaperBody,
  DocumentPaperFooter: () => DocumentPaperFooter,
  DocumentPaperHeader: () => DocumentPaperHeader,
  EvidenceCard: () => EvidenceCard,
  EvidenceRailItem: () => EvidenceRailItem,
  FilterChip: () => FilterChip,
  Input: () => Input,
  IssueCallout: () => IssueCallout,
  Logo: () => Logo,
  LogoMark: () => LogoMark,
  Spinner: () => Spinner,
  Textarea: () => Textarea,
  TranscriptBlock: () => TranscriptBlock
});
module.exports = __toCommonJS(index_exports);

// src/components/Button.tsx
var React2 = __toESM(require("react"), 1);

// src/components/Spinner.tsx
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var Spinner = React.forwardRef(
  function Spinner2({ size = "md", label = "Loading", className, ...rest }, ref) {
    const cls = ["fr-spinner", `fr-spinner--${size}`, className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "span",
      {
        ref,
        className: cls,
        role: label ? "status" : void 0,
        "aria-live": label ? "polite" : void 0,
        "aria-label": label || void 0,
        ...rest
      }
    );
  }
);
Spinner.displayName = "Spinner";

// src/components/Button.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var Button = React2.forwardRef(
  function Button2({
    variant = "secondary",
    size = "md",
    disabled = false,
    loading = false,
    leadingIcon,
    trailingIcon,
    type = "button",
    className,
    children,
    onClick,
    ...rest
  }, ref) {
    const isInert = disabled || loading;
    const cls = [
      "fr-button",
      `fr-button--${variant}`,
      `fr-button--${size}`,
      className
    ].filter(Boolean).join(" ");
    const spinnerSize = size === "lg" ? "md" : "sm";
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
      "button",
      {
        ref,
        type,
        className: cls,
        disabled,
        "aria-disabled": isInert || void 0,
        "aria-busy": loading || void 0,
        "data-loading": loading || void 0,
        onClick: (e) => {
          if (isInert) {
            e.preventDefault();
            return;
          }
          onClick?.(e);
        },
        ...rest,
        children: [
          loading ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Spinner, { size: spinnerSize, label: "", "aria-hidden": "true" }) : leadingIcon && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { "aria-hidden": "true", children: leadingIcon }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "fr-button__label", children }),
          !loading && trailingIcon && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { "aria-hidden": "true", children: trailingIcon })
        ]
      }
    );
  }
);
Button.displayName = "Button";

// src/components/Input.tsx
var React3 = __toESM(require("react"), 1);
var import_jsx_runtime3 = require("react/jsx-runtime");
var Input = React3.forwardRef(
  function Input2({
    label,
    helperText,
    error,
    required,
    inputSize = "md",
    id: idProp,
    className,
    fieldClassName,
    disabled,
    "aria-describedby": ariaDescribedByProp,
    ...rest
  }, ref) {
    const reactId = React3.useId();
    const id = idProp ?? reactId;
    const helperId = helperText ? `${id}-helper` : void 0;
    const errorId = error ? `${id}-error` : void 0;
    const describedBy = [ariaDescribedByProp, errorId, !error ? helperId : void 0].filter(Boolean).join(" ") || void 0;
    const inputCls = [
      "fr-input",
      inputSize !== "md" && `fr-input--${inputSize}`,
      className
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: ["fr-field", fieldClassName].filter(Boolean).join(" "), children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("label", { htmlFor: id, className: "fr-field__label", children: [
        label,
        required && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "fr-field__required", "aria-hidden": "true", children: "*" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        "input",
        {
          ref,
          id,
          className: inputCls,
          required,
          disabled,
          "aria-invalid": error ? true : void 0,
          "aria-describedby": describedBy,
          ...rest
        }
      ),
      error ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { id: errorId, className: "fr-field__error", role: "alert", children: error }) : helperText ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { id: helperId, className: "fr-field__helper", children: helperText }) : null
    ] });
  }
);
Input.displayName = "Input";

// src/components/Textarea.tsx
var React4 = __toESM(require("react"), 1);
var import_jsx_runtime4 = require("react/jsx-runtime");
var Textarea = React4.forwardRef(
  function Textarea2({
    label,
    helperText,
    error,
    required,
    id: idProp,
    className,
    fieldClassName,
    disabled,
    rows = 4,
    "aria-describedby": ariaDescribedByProp,
    ...rest
  }, ref) {
    const reactId = React4.useId();
    const id = idProp ?? reactId;
    const helperId = helperText ? `${id}-helper` : void 0;
    const errorId = error ? `${id}-error` : void 0;
    const describedBy = [ariaDescribedByProp, errorId, !error ? helperId : void 0].filter(Boolean).join(" ") || void 0;
    const cls = ["fr-input", "fr-textarea", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: ["fr-field", fieldClassName].filter(Boolean).join(" "), children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("label", { htmlFor: id, className: "fr-field__label", children: [
        label,
        required && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "fr-field__required", "aria-hidden": "true", children: "*" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "textarea",
        {
          ref,
          id,
          className: cls,
          rows,
          required,
          disabled,
          "aria-invalid": error ? true : void 0,
          "aria-describedby": describedBy,
          ...rest
        }
      ),
      error ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { id: errorId, className: "fr-field__error", role: "alert", children: error }) : helperText ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { id: helperId, className: "fr-field__helper", children: helperText }) : null
    ] });
  }
);
Textarea.displayName = "Textarea";

// src/components/Badge.tsx
var React5 = __toESM(require("react"), 1);
var import_jsx_runtime5 = require("react/jsx-runtime");
var VARIANT_LABEL = {
  draft: "Draft",
  approved: "Approved",
  generating: "Generating",
  failed: "Failed"
};
var Badge = React5.forwardRef(
  function Badge2({ variant, indicator = "auto", className, children, ...rest }, ref) {
    const cls = ["fr-badge", `fr-badge--${variant}`, className].filter(Boolean).join(" ");
    const showSpinner = indicator !== "none" && variant === "generating" && indicator === "auto";
    const showDot = indicator !== "none" && !showSpinner;
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("span", { ref, className: cls, ...rest, children: [
      showSpinner && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Spinner, { size: "sm", label: "", "aria-hidden": "true" }),
      showDot && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "fr-badge__dot", "aria-hidden": "true" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: children ?? VARIANT_LABEL[variant] })
    ] });
  }
);
Badge.displayName = "Badge";

// src/components/ApprovalPill.tsx
var React6 = __toESM(require("react"), 1);
var import_jsx_runtime6 = require("react/jsx-runtime");
var ApprovalPill = React6.forwardRef(function ApprovalPill2({
  approved,
  approveLabel = "Goedkeuren",
  approvedLabel = "Goedgekeurd",
  onToggle,
  className,
  type = "button",
  onClick,
  ...rest
}, ref) {
  const classNames = [
    "fr-approval-pill",
    approved && "fr-approval-pill--approved",
    className
  ].filter(Boolean).join(" ");
  const symbol = approved ? "\u2713" : "\u25CB";
  const label = approved ? approvedLabel : approveLabel;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
    "button",
    {
      ref,
      type,
      className: classNames,
      "aria-pressed": approved,
      onClick: (event) => {
        onClick?.(event);
        if (!event.defaultPrevented) {
          onToggle?.();
        }
      },
      ...rest,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "fr-approval-pill__symbol", "aria-hidden": "true", children: symbol }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { children: label })
      ]
    }
  );
});
ApprovalPill.displayName = "ApprovalPill";

// src/components/AccuracyChip.tsx
var React7 = __toESM(require("react"), 1);
var import_jsx_runtime7 = require("react/jsx-runtime");
var getAccuracyChipVariant = (value) => {
  if (value < 60) {
    return "alert";
  }
  if (value < 75) {
    return "warn";
  }
  return "neutral";
};
var AccuracyChip = React7.forwardRef(function AccuracyChip2({ value, variant, label = "AI", className, ...rest }, ref) {
  const resolvedVariant = variant ?? getAccuracyChipVariant(value);
  const classNames = [
    "fr-accuracy-chip",
    `fr-accuracy-chip--${resolvedVariant}`,
    className
  ].filter(Boolean).join(" ");
  const style = {
    "--fr-accuracy-chip-value": `${value}%`
  };
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { ref, className: classNames, style, ...rest, children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: "fr-accuracy-chip__value", children: [
      value,
      "%"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "fr-accuracy-chip__meter", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "fr-accuracy-chip__meter-fill" }) })
  ] });
});
AccuracyChip.displayName = "AccuracyChip";

// src/components/CitationChip.tsx
var React8 = __toESM(require("react"), 1);
var import_jsx_runtime8 = require("react/jsx-runtime");
var CitationChip = React8.forwardRef(function CitationChip2({
  timestamp,
  variant = "neutral",
  children,
  className,
  type = "button",
  ...rest
}, ref) {
  const classNames = [
    "fr-citation-chip",
    `fr-citation-chip--${variant}`,
    className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("button", { ref, type, className: classNames, ...rest, children: children ?? `[${timestamp}]` });
});
CitationChip.displayName = "CitationChip";

// src/components/FilterChip.tsx
var React9 = __toESM(require("react"), 1);
var import_jsx_runtime9 = require("react/jsx-runtime");
var FilterChip = React9.forwardRef(
  function FilterChip2({
    selected = false,
    onToggle,
    className,
    type = "button",
    onClick,
    children,
    ...rest
  }, ref) {
    const classNames = ["fr-fchip", selected && "fr-fchip--selected", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      "button",
      {
        ref,
        type,
        className: classNames,
        "aria-pressed": selected,
        onClick: (event) => {
          onClick?.(event);
          if (!event.defaultPrevented) {
            onToggle?.();
          }
        },
        ...rest,
        children
      }
    );
  }
);
FilterChip.displayName = "FilterChip";

// src/components/IssueCallout.tsx
var React10 = __toESM(require("react"), 1);
var import_jsx_runtime10 = require("react/jsx-runtime");
var IssueCallout = React10.forwardRef(
  function IssueCallout2({ variant = "warn", title, action, className, children, ...rest }, ref) {
    const classNames = [
      "fr-issue-callout",
      `fr-issue-callout--${variant}`,
      className
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { ref, className: classNames, ...rest, children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "fr-issue-callout__content", children: [
        title && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "fr-issue-callout__title", children: title }),
        children && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "fr-issue-callout__body", children })
      ] }),
      action && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "fr-issue-callout__action", children: action })
    ] });
  }
);
IssueCallout.displayName = "IssueCallout";

// src/components/EvidenceRailItem.tsx
var React11 = __toESM(require("react"), 1);
var import_jsx_runtime11 = require("react/jsx-runtime");
var EvidenceRailItem = React11.forwardRef(function EvidenceRailItem2({
  timestamp,
  icon,
  title,
  sectionRef,
  variant = "neutral",
  active = false,
  connector = "middle",
  className,
  type = "button",
  ...rest
}, ref) {
  const resolvedVariant = active ? "active" : variant;
  const classNames = [
    "fr-evidence-rail-item",
    `fr-evidence-rail-item--${resolvedVariant}`,
    className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
    "button",
    {
      ref,
      type,
      className: classNames,
      "data-connector": connector,
      "aria-pressed": active || void 0,
      ...rest,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "fr-evidence-rail-item__rail", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "fr-evidence-rail-item__node" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "fr-evidence-rail-item__timestamp", children: timestamp }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("span", { className: "fr-evidence-rail-item__content", children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("span", { className: "fr-evidence-rail-item__title", children: [
            icon && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "fr-evidence-rail-item__icon", "aria-hidden": "true", children: icon }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: title })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "fr-evidence-rail-item__section", children: sectionRef })
        ] })
      ]
    }
  );
});
EvidenceRailItem.displayName = "EvidenceRailItem";

// src/components/CalmTimeline.tsx
var React12 = __toESM(require("react"), 1);
var import_jsx_runtime12 = require("react/jsx-runtime");
var getPositionStyle = (position) => ({
  "--fr-calm-timeline-position": `${position}%`
});
var CalmTimeline = React12.forwardRef(
  function CalmTimeline2({ labels, events, activeEventId, onEventSelect, className, ...rest }, ref) {
    const classNames = ["fr-calm-timeline", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { ref, className: classNames, ...rest, children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "fr-calm-timeline__axis", children: [
      labels.map((timelineLabel) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
        "span",
        {
          className: "fr-calm-timeline__label",
          style: getPositionStyle(timelineLabel.position),
          children: timelineLabel.label
        },
        timelineLabel.id
      )),
      events.map((timelineEvent) => {
        const resolvedVariant = timelineEvent.id === activeEventId ? "active" : timelineEvent.variant ?? "neutral";
        const eventClassNames = [
          "fr-calm-timeline__event",
          `fr-calm-timeline__event--${resolvedVariant}`
        ].join(" ");
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          "button",
          {
            type: "button",
            className: eventClassNames,
            style: getPositionStyle(timelineEvent.position),
            title: timelineEvent.tooltip ?? timelineEvent.label,
            "aria-label": timelineEvent.tooltip ?? timelineEvent.label,
            "aria-pressed": timelineEvent.id === activeEventId,
            onClick: () => onEventSelect?.(timelineEvent),
            children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "fr-calm-timeline__dot", "aria-hidden": "true" })
          },
          timelineEvent.id
        );
      })
    ] }) });
  }
);
CalmTimeline.displayName = "CalmTimeline";

// src/components/DocumentPaper.tsx
var React13 = __toESM(require("react"), 1);
var import_jsx_runtime13 = require("react/jsx-runtime");
var DocumentPaper = React13.forwardRef(function DocumentPaper2({ className, ...rest }, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    "section",
    {
      ref,
      className: ["fr-document-paper", className].filter(Boolean).join(" "),
      ...rest
    }
  );
});
DocumentPaper.displayName = "DocumentPaper";
var DocumentPaperHeader = ({ className, ...rest }) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
  "header",
  {
    className: ["fr-document-paper__header", className].filter(Boolean).join(" "),
    ...rest
  }
);
var DocumentPaperBody = ({ className, ...rest }) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
  "div",
  {
    className: ["fr-document-paper__body", className].filter(Boolean).join(" "),
    ...rest
  }
);
var DocumentPaperFooter = ({ className, ...rest }) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
  "footer",
  {
    className: ["fr-document-paper__footer", className].filter(Boolean).join(" "),
    ...rest
  }
);

// src/components/TranscriptBlock.tsx
var React14 = __toESM(require("react"), 1);
var import_jsx_runtime14 = require("react/jsx-runtime");
var TranscriptBlock = React14.forwardRef(function TranscriptBlock2({ timestamp, speaker, tags, className, children, ...rest }, ref) {
  const classNames = ["fr-transcript-block", className].filter(Boolean).join(" ");
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("article", { ref, className: classNames, ...rest, children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "fr-transcript-block__time", children: timestamp }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "fr-transcript-block__content", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "fr-transcript-block__speaker", children: speaker }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "fr-transcript-block__body", children }),
      tags && tags.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "fr-transcript-block__tags", children: tags.map((tag, tagIndex) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "fr-transcript-block__tag", children: tag }, tagIndex)) })
    ] })
  ] });
});
TranscriptBlock.displayName = "TranscriptBlock";

// src/components/EvidenceCard.tsx
var React15 = __toESM(require("react"), 1);
var import_jsx_runtime15 = require("react/jsx-runtime");
var EvidenceCard = React15.forwardRef(
  function EvidenceCard2({
    media,
    evidenceType,
    timestamp,
    caption,
    sectionLabel,
    accuracy,
    accuracyVariant,
    className,
    ...rest
  }, ref) {
    const classNames = ["fr-evidence-card", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("article", { ref, className: classNames, ...rest, children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "fr-evidence-card__media", children: media }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "fr-evidence-card__body", children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "fr-evidence-card__meta", children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "fr-evidence-card__type", children: evidenceType }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "fr-evidence-card__timestamp", children: timestamp })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "fr-evidence-card__caption", children: caption }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "fr-evidence-card__footer", children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("span", { className: "fr-evidence-card__section", children: [
            "\u2192 ",
            sectionLabel
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(AccuracyChip, { value: accuracy, variant: accuracyVariant })
        ] })
      ] })
    ] });
  }
);
EvidenceCard.displayName = "EvidenceCard";

// src/components/Card.tsx
var React16 = __toESM(require("react"), 1);
var import_jsx_runtime16 = require("react/jsx-runtime");
var Card = React16.forwardRef(
  function Card2(props, ref) {
    const {
      padding = "md",
      interactive = false,
      className,
      children,
      ...rest
    } = props;
    const cls = [
      "fr-card",
      `fr-card--padding-${padding}`,
      interactive && "fr-card--interactive",
      className
    ].filter(Boolean).join(" ");
    if (interactive) {
      return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
        "button",
        {
          ref,
          type: "button",
          className: cls,
          ...rest,
          children
        }
      );
    }
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
      "div",
      {
        ref,
        className: cls,
        ...rest,
        children
      }
    );
  }
);
Card.displayName = "Card";
var CardHeader = ({
  className,
  ...rest
}) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
  "div",
  {
    className: ["fr-card__header", className].filter(Boolean).join(" "),
    ...rest
  }
);
var CardTitle = ({
  className,
  ...rest
}) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
  "h3",
  {
    className: ["fr-card__title", className].filter(Boolean).join(" "),
    ...rest
  }
);
var CardSubtitle = ({ className, ...rest }) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
  "p",
  {
    className: ["fr-card__subtitle", className].filter(Boolean).join(" "),
    ...rest
  }
);
var CardFooter = ({
  className,
  ...rest
}) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
  "div",
  {
    className: ["fr-card__footer", className].filter(Boolean).join(" "),
    ...rest
  }
);

// src/components/Divider.tsx
var React17 = __toESM(require("react"), 1);
var import_jsx_runtime17 = require("react/jsx-runtime");
var Divider = React17.forwardRef(
  function Divider2({
    orientation = "horizontal",
    spacing = "none",
    decorative = true,
    className,
    ...rest
  }, ref) {
    const cls = [
      "fr-divider",
      `fr-divider--${orientation}`,
      spacing !== "none" && `fr-divider--spacing-${spacing}`,
      className
    ].filter(Boolean).join(" ");
    if (orientation === "horizontal" && decorative) {
      return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("hr", { ref, className: cls, ...rest });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "div",
      {
        ref,
        className: cls,
        role: decorative ? "presentation" : "separator",
        "aria-orientation": !decorative ? orientation : void 0,
        ...rest
      }
    );
  }
);
Divider.displayName = "Divider";

// src/components/Logo.tsx
var React18 = __toESM(require("react"), 1);
var import_jsx_runtime18 = require("react/jsx-runtime");
var Logo = React18.forwardRef(function Logo2({
  variant = "ink",
  size,
  markOnly = false,
  onDark = false,
  className,
  style,
  "aria-label": ariaLabel = "FieldReport",
  ...rest
}, ref) {
  if (markOnly) {
    const markCls = [
      "fr-logo-mark",
      variant === "accent" && "fr-logo-mark--accent",
      className
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
      "span",
      {
        ref,
        className: markCls,
        role: "img",
        "aria-label": ariaLabel,
        style: {
          ...size ? { fontSize: size, width: size, height: size } : null,
          ...style
        },
        ...rest
      }
    );
  }
  const cls = [
    "fr-logo",
    variant === "accent" && "fr-logo--accent",
    variant === "mono" && "fr-logo--mono",
    onDark && "fr-logo--on-dark",
    className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
    "span",
    {
      ref,
      className: cls,
      role: "img",
      "aria-label": ariaLabel,
      style: { ...size ? { fontSize: size } : null, ...style },
      ...rest,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "fr-logo__glyph", "aria-hidden": "true" }),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("span", { className: "fr-logo__wordmark", "aria-hidden": "true", children: [
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "fr-logo__field", children: "Field" }),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "fr-logo__report", children: "Report" })
        ] })
      ]
    }
  );
});
Logo.displayName = "Logo";
var LogoMark = React18.forwardRef(function LogoMark2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Logo, { ref, ...props, markOnly: true });
});
LogoMark.displayName = "LogoMark";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AccuracyChip,
  ApprovalPill,
  Badge,
  Button,
  CalmTimeline,
  Card,
  CardFooter,
  CardHeader,
  CardSubtitle,
  CardTitle,
  CitationChip,
  Divider,
  DocumentPaper,
  DocumentPaperBody,
  DocumentPaperFooter,
  DocumentPaperHeader,
  EvidenceCard,
  EvidenceRailItem,
  FilterChip,
  Input,
  IssueCallout,
  Logo,
  LogoMark,
  Spinner,
  Textarea,
  TranscriptBlock
});
