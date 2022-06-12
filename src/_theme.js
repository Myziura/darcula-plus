const LANGUAGES = Object.freeze(["js", "ts"]);
const COLORS = Object.freeze({
  // main
  ORANGE: "#CC8242",
  ORANGE_TRANSPARENT: "#CC8242cc",
  // funtions
  YELLOW: "#FFC66D",
  YELLOW_LIGHT: "#E8BF85",
  // consts
  PURPLE: "#9E7BB0",
  // TS types
  BLUE: "#7A9EC2",

  // strings
  GREEN: "#6A8759",
  GREEN_LIGHT: "#A5C261",

  GRAY: "#CCCCCC",
  GRAY_DARK: "#858585",

  RED: "#f66051",
  TEST: "#f66051",

  EDITOR_BG: "#242424",
  EDITOR_BG_TRANSPARENT: "#242424cc",

  EDITOR_BG_LIGHT: "#2D2D2D",
  EDITOR_BG_LIGHTER: "#2E2E2F",

  WRAPPER_BG: "#3B3B3C",
  WRAPPER_BG_LIGHT: "#37373E",

  BORDER: "#424342",
  SELECTION: "#204182cc",
  SELECTION_TRANSPARENT: "#20418280",
  TRANSPARENT: "#ffffff00",
  WHITE: "#ffffff",
});

export default {
  name: "Darcula Plus",
  author: "Myziura",
  maintainers: ["Myziura <myziura.work@gmail.com>"],
  semanticClass: "theme.darcula-plus",
  semanticHighlighting: true,
  darcula: {
    base: [
      COLORS.EDITOR_BG,
      COLORS.GRAY,
      COLORS.SELECTION,
      COLORS.GRAY_DARK,
      COLORS.BLUE,
      COLORS.YELLOW,
      COLORS.GREEN_LIGHT,
      COLORS.ORANGE,
      COLORS.PURPLE,
      COLORS.RED,
      COLORS.GREEN,
    ],
    ansi: [
      COLORS.EDITOR_BG,
      COLORS.RED,
      COLORS.YELLOW,
      COLORS.GREEN,
      COLORS.PURPLE,
      COLORS.ORANGE,
      COLORS.BLUE,
      COLORS.GRAY,
      COLORS.GRAY_DARK,
      "#FF6E6E",
      "#69FF94",
      "#FFFFA5",
      COLORS.TEST,
      "#FF92DF",
      "#A4FFFF",
      COLORS.WHITE,
    ],
    // brightOther: [COLORS.GREEN, COLORS.TEST],
    other: [
      COLORS.EDITOR_BG_LIGHT,
      COLORS.BORDER,
      COLORS.WHITE,
      COLORS.EDITOR_BG_TRANSPARENT,
      COLORS.SELECTION_TRANSPARENT,
      COLORS.WRAPPER_BG,
      COLORS.EDITOR_BG,
      COLORS.WRAPPER_BG,
    ],
  },
  colors: {
    "terminal.background": COLORS.EDITOR_BG,
    "terminal.foreground": COLORS.GRAY,
    "terminal.ansiBrightBlack": COLORS.GRAY_DARK,
    "terminal.ansiBrightRed": "#FF6E6E",
    "terminal.ansiBrightGreen": "#69FF94",
    "terminal.ansiBrightYellow": "#FFFFA5",
    "terminal.ansiBrightBlue": COLORS.TEST,
    "terminal.ansiBrightMagenta": "#FF92DF",
    "terminal.ansiBrightCyan": "#A4FFFF",
    "terminal.ansiBrightWhite": COLORS.WHITE,
    "terminal.ansiBlack": COLORS.EDITOR_BG,
    "terminal.ansiRed": COLORS.RED,
    "terminal.ansiGreen": COLORS.YELLOW,
    "terminal.ansiYellow": COLORS.GREEN,
    "terminal.ansiBlue": COLORS.PURPLE,
    "terminal.ansiMagenta": COLORS.ORANGE,
    "terminal.ansiCyan": COLORS.BLUE,
    "terminal.ansiWhite": COLORS.GRAY,
    focusBorder: COLORS.GRAY_DARK,
    foreground: COLORS.GRAY,
    "selection.background": COLORS.SELECTION,
    errorForeground: COLORS.RED,
    "button.background": COLORS.SELECTION,
    "button.foreground": COLORS.GRAY,
    "button.secondaryBackground": COLORS.EDITOR_BG,
    "button.secondaryForeground": COLORS.GRAY,
    "button.secondaryHoverBackground": COLORS.WRAPPER_BG,
    "dropdown.background": COLORS.WRAPPER_BG,
    "dropdown.border": COLORS.WRAPPER_BG,
    "dropdown.foreground": COLORS.GRAY,
    "input.background": COLORS.EDITOR_BG,
    "input.foreground": COLORS.GRAY,
    "input.border": COLORS.WRAPPER_BG,
    "input.placeholderForeground": COLORS.GRAY_DARK,
    "inputOption.activeBackground": COLORS.ORANGE_TRANSPARENT,
    "inputValidation.infoBorder": COLORS.ORANGE,
    "inputValidation.warningBorder": COLORS.ORANGE_LIGHT,
    "inputValidation.errorBorder": COLORS.RED,
    "badge.foreground": COLORS.GRAY,
    "badge.background": COLORS.SELECTION,
    "progressBar.background": COLORS.ORANGE,
    "list.activeSelectionBackground": COLORS.SELECTION,
    "list.activeSelectionForeground": COLORS.GRAY,
    "list.dropBackground": COLORS.SELECTION,
    "list.focusBackground": COLORS.WRAPPER_BG_LIGHT,
    "list.highlightForeground": COLORS.BLUE,
    "list.hoverBackground": COLORS.WRAPPER_BG_LIGHT,
    "list.inactiveSelectionBackground": COLORS.WRAPPER_BG_LIGHT,
    "list.warningForeground": COLORS.GREEN_LIGHT,
    "list.errorForeground": COLORS.RED,
    "activityBar.background": COLORS.WRAPPER_BG,
    "activityBar.inactiveForeground": COLORS.GRAY_DARK,
    "activityBar.foreground": COLORS.GRAY,
    "activityBar.activeBorder": COLORS.WHITE,
    "activityBar.activeBackground": COLORS.TRANSPARENT,
    "activityBarBadge.background": COLORS.ORANGE,
    "activityBarBadge.foreground": COLORS.GRAY,
    "sideBar.background": COLORS.EDITOR_BG,
    "sideBarTitle.foreground": COLORS.GRAY,
    "sideBarSectionHeader.background": COLORS.EDITOR_BG,
    "sideBarSectionHeader.border": COLORS.WRAPPER_BG,
    "editorGroup.border": COLORS.ORANGE,
    "editorGroup.dropBackground": COLORS.EDITOR_BG_TRANSPARENT,
    "editorGroupHeader.tabsBackground": COLORS.EDITOR_BG,
    "tab.activeBackground": COLORS.WRAPPER_BG,
    "tab.activeForeground": COLORS.WHITE,
    "tab.border": COLORS.EDITOR_BG,
    "tab.activeBorderBottom": COLORS.ORANGE,
    "tab.inactiveBackground": COLORS.EDITOR_BG_LIGHTER,
    "tab.inactiveForeground": COLORS.GRAY,
    "editor.foreground": COLORS.GRAY,
    "editor.background": COLORS.EDITOR_BG,
    "editorLineNumber.foreground": COLORS.GRAY_DARK,
    "editor.selectionBackground": COLORS.SELECTION,
    "editor.selectionHighlightBackground": COLORS.SELECTION_TRANSPARENT,
    "editor.foldBackground": COLORS.TRANSPARENT,
    "editor.wordHighlightBackground": COLORS.SELECTION_TRANSPARENT,
    "editor.wordHighlightStrongBackground": COLORS.SELECTION,
    // "editor.findMatchBackground": COLORS.ORANGE_TRANSPARENT,
    // "editor.findMatchHighlightBackground": COLORS.ORANGE_TRANSPARENT,
    "editor.findRangeHighlightBackground": COLORS.EDITOR_BG_LIGHT,
    "editor.hoverHighlightBackground": COLORS.SELECTION_TRANSPARENT,
    "editor.lineHighlightBorder": COLORS.SELECTION,
    "editorLink.activeForeground": COLORS.BLUE,
    "editor.rangeHighlightBackground": COLORS.SELECTION,
    "editor.snippetTabstopHighlightBackground": COLORS.EDITOR_BG,
    "editor.snippetTabstopHighlightBorder": COLORS.GRAY_DARK,
    "editor.snippetFinalTabstopHighlightBackground": COLORS.EDITOR_BG,
    "editor.snippetFinalTabstopHighlightBorder": COLORS.YELLOW,
    "editorWhitespace.foreground": COLORS.BORDER,
    "editorIndentGuide.background": COLORS.BORDER,
    "editorIndentGuide.activeBackground": COLORS.SELECTION_TRANSPARENT,
    "editorRuler.foreground": COLORS.BORDER,
    "editorCodeLens.foreground": COLORS.GRAY_DARK,
    "editorBracketHighlight.foreground1": COLORS.YELLOW,
    "editorBracketHighlight.foreground2": COLORS.YELLOW, //COLORS.ORANGE,
    "editorBracketHighlight.foreground3": COLORS.YELLOW, // COLORS.BLUE,
    "editorBracketHighlight.foreground4": COLORS.YELLOW,
    "editorBracketHighlight.foreground5": COLORS.YELLOW, //COLORS.PURPLE,
    "editorBracketHighlight.foreground6": COLORS.YELLOW, //COLORS.GREEN_LIGHT,
    "editorBracketHighlight.unexpectedBracket.foreground": COLORS.RED,
    "editorOverviewRuler.border": COLORS.WRAPPER_BG,
    "editorOverviewRuler.selectionHighlightForeground": COLORS.GREEN_LIGHT,
    "editorOverviewRuler.wordHighlightForeground": COLORS.BLUE,
    "editorOverviewRuler.wordHighlightStrongForeground": COLORS.YELLOW,
    // "editorOverviewRuler.modifiedForeground": "#8BE9FD80",
    // "editorOverviewRuler.addedForeground": "#50FA7B80",
    // "editorOverviewRuler.deletedForeground": "#FF555580",
    // "editorOverviewRuler.errorForeground": "#FF555580",
    // "editorOverviewRuler.warningForeground": COLORS.TEST,
    // "editorOverviewRuler.infoForeground": "#8BE9FD80",
    "editorError.foreground": COLORS.RED,
    "editorWarning.foreground": COLORS.BLUE,
    // "editorGutter.modifiedBackground": "#8BE9FD80",
    // "editorGutter.addedBackground": "#50FA7B80",
    // "editorGutter.deletedBackground": "#FF555580",
    "gitDecoration.modifiedResourceForeground": COLORS.YELLOW_LIGHT,
    "gitDecoration.deletedResourceForeground": COLORS.RED,
    "gitDecoration.untrackedResourceForeground": COLORS.YELLOW,
    "gitDecoration.ignoredResourceForeground": COLORS.GRAY_DARK,
    "gitDecoration.conflictingResourceForeground": COLORS.GREEN_LIGHT,
    // "diffEditor.insertedTextBackground": "#50FA7B20",
    // "diffEditor.removedTextBackground": "#FF555550",
    "editorWidget.background": COLORS.EDITOR_BG,
    "editorSuggestWidget.background": COLORS.EDITOR_BG,
    "editorSuggestWidget.foreground": COLORS.GRAY,
    "editorSuggestWidget.selectedBackground": COLORS.SELECTION,
    "editorHoverWidget.background": COLORS.EDITOR_BG,
    "editorHoverWidget.border": COLORS.GRAY_DARK,
    "editorMarkerNavigation.background": COLORS.EDITOR_BG,
    "peekView.border": COLORS.SELECTION,
    "peekViewEditor.background": COLORS.EDITOR_BG,
    "peekViewEditor.matchHighlightBackground": COLORS.GREEN,
    "peekViewResult.background": COLORS.EDITOR_BG,
    "peekViewResult.fileForeground": COLORS.GRAY,
    "peekViewResult.lineForeground": COLORS.GRAY,
    "peekViewResult.matchHighlightBackground": COLORS.GREEN,
    "peekViewResult.selectionBackground": COLORS.SELECTION,
    "peekViewResult.selectionForeground": COLORS.GRAY,
    "peekViewTitle.background": COLORS.WRAPPER_BG,
    "peekViewTitleDescription.foreground": COLORS.GRAY_DARK,
    "peekViewTitleLabel.foreground": COLORS.GRAY,
    // "merge.currentHeaderBackground": "#50FA7B90",
    // "merge.incomingHeaderBackground": "#BD93F990",
    "editorOverviewRuler.currentContentForeground": COLORS.YELLOW,
    "editorOverviewRuler.incomingContentForeground": COLORS.ORANGE,
    "panel.background": COLORS.EDITOR_BG,
    "panel.border": COLORS.ORANGE,
    "panelTitle.activeBorder": COLORS.ORANGE,
    "panelTitle.activeForeground": COLORS.GRAY,
    "panelTitle.inactiveForeground": COLORS.GRAY_DARK,
    "statusBar.background": COLORS.WRAPPER_BG,
    "statusBar.foreground": COLORS.GRAY,
    "statusBar.debuggingBackground": COLORS.RED,
    "statusBar.debuggingForeground": COLORS.WRAPPER_BG,
    "statusBar.noFolderBackground": COLORS.WRAPPER_BG,
    "statusBar.noFolderForeground": COLORS.GRAY,
    "statusBarItem.prominentBackground": COLORS.RED,
    "statusBarItem.prominentHoverBackground": COLORS.GREEN_LIGHT,
    "statusBarItem.remoteForeground": COLORS.EDITOR_BG,
    "statusBarItem.remoteBackground": COLORS.ORANGE,
    "titleBar.activeBackground": COLORS.WRAPPER_BG,
    "titleBar.activeForeground": COLORS.WRAPPER_BG,
    "titleBar.inactiveBackground": COLORS.WRAPPER_BG,
    "titleBar.inactiveForeground": COLORS.GRAY_DARK,
    "extensionButton.prominentForeground": COLORS.GRAY,
    // "extensionButton.prominentBackground": "#50FA7B90",
    // "extensionButton.prominentHoverBackground": "#50FA7B60",
    "pickerGroup.border": COLORS.ORANGE,
    "pickerGroup.foreground": COLORS.BLUE,
    "debugToolBar.background": COLORS.EDITOR_BG,
    "walkThrough.embeddedEditorBackground": COLORS.EDITOR_BG,
    "settings.headerForeground": COLORS.GRAY,
    "settings.modifiedItemIndicator": COLORS.GREEN_LIGHT,
    "settings.dropdownBackground": COLORS.EDITOR_BG,
    "settings.dropdownForeground": COLORS.GRAY,
    "settings.dropdownBorder": COLORS.WRAPPER_BG,
    "settings.checkboxBackground": COLORS.EDITOR_BG,
    "settings.checkboxForeground": COLORS.GRAY,
    "settings.checkboxBorder": COLORS.WRAPPER_BG,
    "settings.textInputBackground": COLORS.EDITOR_BG,
    "settings.textInputForeground": COLORS.GRAY,
    "settings.textInputBorder": COLORS.WRAPPER_BG,
    "settings.numberInputBackground": COLORS.EDITOR_BG,
    "settings.numberInputForeground": COLORS.GRAY,
    "settings.numberInputBorder": COLORS.WRAPPER_BG,
    "breadcrumb.foreground": COLORS.GRAY_DARK,
    "breadcrumb.background": COLORS.EDITOR_BG,
    "breadcrumb.focusForeground": COLORS.GRAY,
    "breadcrumb.activeSelectionForeground": COLORS.GRAY,
    "breadcrumbPicker.background": COLORS.WRAPPER_BG,
    "listFilterWidget.background": COLORS.WRAPPER_BG,
    "listFilterWidget.outline": COLORS.SELECTION_TRANSPARENT,
    "listFilterWidget.noMatchesOutline": COLORS.RED,

    "editor.lineHighlightBorder": COLORS.TRANSPARENT,
    "editor.lineHighlightBackground": COLORS.EDITOR_BG_LIGHT,
    "editorGutter.background": COLORS.EDITOR_BG_LIGHT,
    "sideBar.border": COLORS.BORDER,
  },
  tokenColors: [
    {
      scope: ["emphasis"],
      settings: {
        fontStyle: "italic",
      },
    },
    {
      scope: ["strong"],
      settings: {
        fontStyle: "bold",
      },
    },
    {
      scope: ["header"],
      settings: {
        foreground: COLORS.PURPLE,
      },
    },
    {
      scope: ["meta.diff", "meta.diff.header"],
      settings: {
        foreground: COLORS.GRAY_DARK,
      },
    },
    {
      scope: ["markup.inserted"],
      settings: {
        foreground: COLORS.YELLOW,
      },
    },
    {
      scope: ["markup.deleted"],
      settings: {
        foreground: COLORS.RED,
      },
    },
    {
      scope: ["markup.changed"],
      settings: {
        foreground: COLORS.GREEN_LIGHT,
      },
    },
    {
      scope: ["invalid"],
      settings: {
        foreground: COLORS.RED,
        fontStyle: "underline italic",
      },
    },
    {
      scope: ["invalid.deprecated"],
      settings: {
        foreground: COLORS.GRAY,
        fontStyle: "underline italic",
      },
    },
    {
      scope: ["entity.name.filename"],
      settings: {
        foreground: COLORS.GREEN,
      },
    },
    {
      scope: ["markup.error"],
      settings: {
        foreground: COLORS.RED,
      },
    },
    {
      name: "Underlined markup",
      scope: ["markup.underline"],
      settings: {
        fontStyle: "underline",
      },
    },
    {
      name: "Bold markup",
      scope: ["markup.bold"],
      settings: {
        fontStyle: "bold",
        foreground: COLORS.GREEN_LIGHT,
      },
    },
    {
      name: "Markup headings",
      scope: ["markup.heading"],
      settings: {
        fontStyle: "bold",
        foreground: COLORS.ORANGE,
      },
    },
    {
      name: "Markup italic",
      scope: ["markup.italic"],
      settings: {
        foreground: COLORS.GREEN,
        fontStyle: "italic",
      },
    },
    {
      name: "Bullets, lists (prose)",
      scope: [
        "beginning.punctuation.definition.list.markdown",
        "beginning.punctuation.definition.quote.markdown",
        "punctuation.definition.link.restructuredtext",
      ],
      settings: {
        foreground: COLORS.BLUE,
      },
    },
    {
      name: "Inline code (prose)",
      scope: ["markup.inline.raw", "markup.raw.restructuredtext"],
      settings: {
        foreground: COLORS.YELLOW,
      },
    },
    {
      name: "Links (prose)",
      scope: ["markup.underline.link", "markup.underline.link.image"],
      settings: {
        foreground: COLORS.BLUE,
      },
    },
    {
      name: "Link text, image alt text (prose)",
      scope: [
        "meta.link.reference.def.restructuredtext",
        "punctuation.definition.directive.restructuredtext",
        "string.other.link.description",
        "string.other.link.title",
      ],
      settings: {
        foreground: COLORS.GREEN,
      },
    },
    {
      name: "Blockquotes (prose)",
      scope: ["entity.name.directive.restructuredtext", "markup.quote"],
      settings: {
        foreground: COLORS.GREEN,
        fontStyle: "italic",
      },
    },
    {
      name: "Horizontal rule (prose)",
      scope: ["meta.separator.markdown"],
      settings: {
        foreground: COLORS.GRAY_DARK,
      },
    },
    {
      name: "Code blocks",
      scope: [
        "fenced_code.block.language",
        "markup.raw.inner.restructuredtext",
        "markup.fenced_code.block.markdown punctuation.definition.markdown",
      ],
      settings: {
        foreground: COLORS.YELLOW,
      },
    },
    {
      name: "Prose constants",
      scope: ["punctuation.definition.constant.restructuredtext"],
      settings: {
        foreground: COLORS.PURPLE,
      },
    },
    {
      name: "Braces in markdown headings",
      scope: [
        "markup.heading.markdown punctuation.definition.string.begin",
        "markup.heading.markdown punctuation.definition.string.end",
      ],
      settings: {
        foreground: COLORS.PURPLE,
      },
    },
    {
      name: "Braces in markdown paragraphs",
      scope: [
        "meta.paragraph.markdown punctuation.definition.string.begin",
        "meta.paragraph.markdown punctuation.definition.string.end",
      ],
      settings: {
        foreground: COLORS.GRAY,
      },
    },
    {
      name: "Braces in markdown blockquotes",
      scope: [
        "markup.quote.markdown meta.paragraph.markdown punctuation.definition.string.begin",
        "markup.quote.markdown meta.paragraph.markdown punctuation.definition.string.end",
      ],
      settings: {
        foreground: COLORS.GREEN,
      },
    },
    {
      name: "User-defined class names",
      scope: ["entity.name.type.class", "entity.name.class"],
      settings: {
        foreground: COLORS.YELLOW,
      },
    },
    {
      name: "this, super, self, etc.",
      scope: [
        "keyword.expressions-and-types.swift",
        "keyword.other.this",
        "variable.language",
        "variable.language punctuation.definition.variable.php",
        "variable.other.readwrite.instance.ruby",
        "variable.parameter.function.language.special",
        "support.type.object.module",
      ],
      settings: {
        foreground: COLORS.PURPLE,
        // fontStyle: "italic",
      },
    },
    {
      name: "Inherited classes",
      scope: ["entity.other.inherited-class"],
      settings: {
        fontStyle: "italic",
        foreground: COLORS.BLUE,
      },
    },
    {
      name: "Comments",
      scope: [
        "comment",
        "punctuation.definition.comment",
        "unused.comment",
        "wildcard.comment",
      ],
      settings: {
        foreground: COLORS.GRAY_DARK,
      },
    },
    {
      name: "JSDoc-style keywords",
      scope: [
        "comment keyword.codetag.notation",
        "comment.block.documentation keyword",
        "comment.block.documentation storage.type.class",
      ],
      settings: {
        foreground: COLORS.ORANGE,
      },
    },
    {
      name: "JSDoc-style types",
      scope: ["comment.block.documentation entity.name.type"],
      settings: {
        foreground: COLORS.BLUE,
        fontStyle: "italic",
      },
    },
    {
      name: "JSDoc-style type brackets",
      scope: [
        "comment.block.documentation entity.name.type punctuation.definition.bracket",
      ],
      settings: {
        foreground: COLORS.BLUE,
      },
    },
    {
      name: "JSDoc-style comment parameters",
      scope: ["comment.block.documentation variable"],
      settings: {
        foreground: COLORS.GREEN_LIGHT,
        fontStyle: "italic",
      },
    },
    {
      name: "false, null",
      scope: ["constant"],
      settings: {
        foreground: COLORS.ORANGE,
      },
    },
    // {
    //   name: "Constants",
    //   scope: ["variable.other.constant"],
    //   settings: {
    //     // foreground: COLORS.PURPLE,
    //     // fontStyle: "bold",
    //   },
    // },
    {
      name: "Constant escape sequences",
      scope: [
        "constant.character.escape",
        "constant.character.string.escape",
        "constant.regexp",
      ],
      settings: {
        foreground: COLORS.ORANGE,
      },
    },
    {
      name: "HTML tags",
      scope: [
        "punctuation.definition.tag.html",
        "punctuation.definition.tag.begin",
        "punctuation.definition.tag.end",
        "entity.name.tag",
        "support.class.component.vue",
      ],
      settings: {
        foreground: COLORS.ORANGE,
      },
    },
    {
      name: "CSS attribute parent selectors ('&')",
      scope: ["entity.other.attribute-name.parent-selector"],
      settings: {
        foreground: COLORS.ORANGE,
      },
    },
    {
      name: "HTML/CSS attribute names",
      scope: ["entity.other.attribute-name"],
      settings: {
        foreground: COLORS.YELLOW,
        // foreground: COLORS.GRAY,
        // fontStyle: "italic",
      },
    },
    {
      name: "Function names",
      scope: [
        "entity.name.function",
        "meta.function-call.object",
        "meta.function-call.php",
        "meta.function-call.static",
        "meta.method-call.java meta.method",
        "meta.method.groovy",
        "support.function",
        "support.function.any-method.lua",
        "keyword.operator.function.infix",
      ],
      settings: {
        foreground: COLORS.YELLOW,
      },
    },
    {
      name: "Function parameters",
      scope: [
        "entity.name.variable.parameter",
        "meta.at-rule.function variable",
        "meta.at-rule.mixin variable",
        "meta.function.arguments variable.other.php",
        "meta.selectionset.graphql meta.arguments.graphql variable.arguments.graphql",
        "variable.parameter",
      ],
      settings: {
        fontStyle: "italic",
        // foreground: COLORS.GREEN_LIGHT,
      },
    },
    {
      name: "Decorators",
      scope: [
        "meta.decorator variable.other.readwrite",
        "meta.decorator variable.other.property",
      ],
      settings: {
        foreground: COLORS.YELLOW,
        fontStyle: "italic",
      },
    },
    {
      name: "Decorator Objects",
      scope: ["meta.decorator variable.other.object"],
      settings: {
        foreground: COLORS.YELLOW,
      },
    },
    {
      name: "Keywords",
      scope: [
        "meta.import",
        "keyword.control",
        "punctuation.definition.keyword",
      ],
      settings: {
        foreground: COLORS.ORANGE,
      },
    },
    {
      name: "true",
      scope: ["constant.language.boolean.true"],
      settings: {
        foreground: COLORS.ORANGE,
      },
    },
    {
      name: "=,",
      scope: ["meta.var", "punctuation.separator.comma"],
      settings: {
        foreground: COLORS.GRAY,
      },
    },
    {
      name: "CSS property name",
      scope: ["support.type.property-name"],
      settings: {
        foreground: COLORS.GRAY,
      },
    },
    {
      name: 'Keyword "new"',
      scope: ["keyword.control.new", "keyword.operator.new"],
      settings: {
        foreground: COLORS.ORANGE,
      },
    },
    {
      name: "Generic selectors (CSS/SCSS/Less/Stylus)",
      scope: ["meta.selector"],
      settings: {
        foreground: COLORS.ORANGE,
      },
    },
    // {
    //   name: "Language Built-ins",
    //   scope: ["support"],
    //   settings: {
    //     // fontStyle: "italic",
    //     // foreground: COLORS.TEST,
    //   },
    // },
    // {
    //   name: "Built-in magic functions and constants",
    //   scope: [
    //     "support.function.magic",
    //     "support.variable",
    //     "variable.other.predefined",
    //     "support.type.builtin",
    //   ],
    //   settings: {
    //     foreground: COLORS.PURPLE,
    //     // foreground: COLORS.TEST,
    //   },
    // },
    {
      name: "Built-in functions / properties",
      scope: ["support.function", "support.type.property-name"],
      settings: {
        fontStyle: "regular",
      },
    },
    // MYZIURA : =
    {
      name: "Separators (key/value, namespace, inheritance, pointer, hash, slice, etc)",
      scope: [
        "constant.other.symbol.hashkey punctuation.definition.constant.ruby",
        "entity.other.attribute-name.placeholder punctuation",
        "entity.other.attribute-name.pseudo-class punctuation",
        "entity.other.attribute-name.pseudo-element punctuation",
        "meta.group.double.toml",
        "meta.group.toml",
        "meta.object-binding-pattern-variable punctuation.destructuring",
        "punctuation.colon.graphql",
        "punctuation.definition.block.scalar.folded.yaml",
        "punctuation.definition.block.scalar.literal.yaml",
        "punctuation.definition.block.sequence.item.yaml",
        "punctuation.definition.entity.other.inherited-class",
        "punctuation.function.swift",
        "punctuation.separator.dictionary.key-value",
        "punctuation.separator.hash",
        "punctuation.separator.inheritance",
        "punctuation.separator.key-value",
        "punctuation.separator.key-value.mapping.yaml",
        "punctuation.separator.namespace",
        "punctuation.separator.pointer-access",
        "punctuation.separator.slice",
        "string.unquoted.heredoc punctuation.definition.string",
        "support.other.chomping-indicator.yaml",
        "punctuation.separator.annotation",
      ],
      settings: {
        foreground: COLORS.GRAY,
      },
    },
    {
      name: "Brackets, braces, parens, etc.",
      scope: [
        "keyword.operator.other.powershell",
        "keyword.other.statement-separator.powershell",
        "meta.brace.round",
        "meta.function-call punctuation",
        "punctuation.definition.arguments.begin",
        "punctuation.definition.arguments.end",
        "punctuation.definition.entity.begin",
        "punctuation.definition.entity.end",
        "punctuation.definition.tag.cs",
        "punctuation.definition.type.begin",
        "punctuation.definition.type.end",
        "punctuation.section.scope.begin",
        "punctuation.section.scope.end",
        "punctuation.terminator.expression.php",
        "storage.type.generic.java",
        "string.template meta.brace",
        "string.template punctuation.accessor",
      ],
      settings: {
        foreground: COLORS.GRAY,
      },
    },
    {
      name: "Variable interpolation operators",
      scope: [
        "meta.string-contents.quoted.double punctuation.definition.variable",
        "punctuation.definition.interpolation.begin",
        "punctuation.definition.interpolation.end",
        "punctuation.definition.template-expression.begin",
        "punctuation.definition.template-expression.end",
        "punctuation.section.embedded.begin",
        "punctuation.section.embedded.coffee",
        "punctuation.section.embedded.end",
        "punctuation.section.embedded.end source.php",
        "punctuation.section.embedded.end source.ruby",
        "punctuation.definition.variable.makefile",
      ],
      settings: {
        foreground: COLORS.ORANGE,
      },
    },
    {
      name: "Keys (serializable languages)",
      scope: [
        "entity.name.function.target.makefile",
        "entity.name.section.toml",
        "entity.name.tag.yaml",
        "variable.other.key.toml",
      ],
      settings: {
        foreground: COLORS.BLUE,
      },
    },
    {
      name: "Dates / timestamps (serializable languages)",
      scope: ["constant.other.date", "constant.other.timestamp"],
      settings: {
        foreground: COLORS.GREEN_LIGHT,
      },
    },
    {
      name: "YAML aliases",
      scope: ["variable.other.alias.yaml"],
      settings: {
        fontStyle: "italic underline",
        foreground: COLORS.YELLOW,
      },
    },
    {
      name: "Storage",
      scope: [
        "storage",
        "meta.implementation storage.type.objc",
        "meta.interface-or-protocol storage.type.objc",
        "source.groovy storage.type.def",
      ],
      settings: {
        fontStyle: "regular",
        foreground: COLORS.ORANGE,
      },
    },
    {
      name: "Types",
      scope: [
        "entity.name.type",
        "keyword.primitive-datatypes.swift",
        "keyword.type.cs",
        "meta.protocol-list.objc",
        "meta.return-type.objc",
        "source.go storage.type",
        "source.groovy storage.type",
        "source.java storage.type",
        "source.powershell entity.other.attribute-name",
        "storage.class.std.rust",
        "storage.type.attribute.swift",
        "storage.type.c",
        "storage.type.core.rust",
        "storage.type.cs",
        "storage.type.groovy",
        "storage.type.objc",
        "storage.type.php",
        "storage.type.haskell",
        "storage.type.ocaml",
        "support.type.primitive",
      ],
      settings: {
        // fontStyle: "italic",
        foreground: COLORS.BLUE,
      },
    },
    {
      name: "Generics, templates, and mapped type declarations",
      scope: [
        "entity.name.type.type-parameter",
        "meta.indexer.mappedtype.declaration entity.name.type",
        "meta.type.parameters entity.name.type",
      ],
      settings: {
        // foreground: COLORS.GREEN_LIGHT,
        foreground: COLORS.BLUE,
      },
    },
    {
      name: "Modifiers",
      scope: ["storage.modifier"],
      settings: {
        foreground: COLORS.ORANGE,
      },
    },
    {
      name: "RegExp string",
      scope: [
        "string.regexp",
        "constant.other.character-class.set.regexp",
        "constant.character.escape.backslash.regexp",
      ],
      settings: {
        foreground: COLORS.GREEN,
      },
    },
    {
      name: "Non-capture operators",
      scope: ["punctuation.definition.group.capture.regexp"],
      settings: {
        foreground: COLORS.TEST,
      },
    },
    {
      name: "RegExp start and end characters",
      scope: [
        "string.regexp punctuation.definition.string.begin",
        "string.regexp punctuation.definition.string.end",
      ],
      settings: {
        foreground: COLORS.RED,
      },
    },
    {
      name: "Character group",
      scope: ["punctuation.definition.character-class.regexp"],
      settings: {
        foreground: COLORS.BLUE,
      },
    },
    {
      name: "Capture groups",
      scope: ["punctuation.definition.group.regexp"],
      settings: {
        foreground: COLORS.GREEN_LIGHT,
      },
    },
    {
      name: "Assertion operators",
      scope: [
        "punctuation.definition.group.assertion.regexp",
        "keyword.operator.negation.regexp",
      ],
      settings: {
        foreground: COLORS.RED,
      },
    },
    {
      name: "Positive lookaheads",
      scope: ["meta.assertion.look-ahead.regexp"],
      settings: {
        foreground: COLORS.YELLOW,
      },
    },
    {
      name: "Strings",
      scope: ["string", "support.type.property-name.json"],
      settings: {
        foreground: COLORS.GREEN,
      },
    },
    {
      name: "String quotes (temporary vscode fix)",
      scope: [
        "punctuation.definition.string.begin",
        "punctuation.definition.string.end",
      ],
      settings: {
        foreground: COLORS.GREEN,
      },
    },
    // {
    //   name: "Property quotes (temporary vscode fix)",
    //   scope: [
    //     "punctuation.support.type.property-name.begin",
    //     "punctuation.support.type.property-name.end",
    //   ],
    //   settings: {
    //     foreground: COLORS.TEST,
    //   },
    // },
    {
      name: "Docstrings",
      scope: [
        "string.quoted.docstring.multi",
        "string.quoted.docstring.multi.python punctuation.definition.string.begin",
        "string.quoted.docstring.multi.python punctuation.definition.string.end",
        "string.quoted.docstring.multi.python constant.character.escape",
      ],
      settings: {
        foreground: COLORS.GRAY_DARK,
      },
    },
    // {
    //   name: "Variables and object properties",
    //   scope: [
    //     "variable",
    //     "constant.other.key.perl",
    //     "support.variable.property",
    //     "variable.other.constant.js",
    //     "variable.other.constant.ts",
    //     "variable.other.constant.tsx",
    //   ],
    //   settings: {
    //     foreground: COLORS.GRAY,
    //   },
    // },
    // {
    //   name: "Variables",
    //   scope: ["variable"],
    //   settings: {
    //     foreground: COLORS.GRAY,
    //   },
    // },
    // {
    //   name: "Variables",
    //   // scope: LANGUAGES.map((language) => [
    //   //   `meta.embedded.line variable`,
    //   // ]).flat(),
    //   scope: ["meta.template.expression variable"],
    //   settings: {
    //     foreground: COLORS.GRAY,
    //   },
    // },
    // {
    //   name: "Destructuring / aliasing reference name (LHS)",
    //   scope: [
    //     "meta.import variable.other.readwrite",
    //     "meta.variable.assignment.destructured.object.coffee variable",
    //   ],
    //   settings: {
    //     fontStyle: "italic",
    //     foreground: COLORS.GREEN_LIGHT,
    //   },
    // },
    // MYZIURA { Geo }
    {
      name: "Destructuring / aliasing variable name (RHS)",
      scope: [
        "entity.name.type.module",
        "meta.import variable.other.readwrite.alias",
        "meta.export variable.other.readwrite.alias",
        "meta.variable.assignment.destructured.object.coffee variable variable",
      ],
      settings: {
        foreground: COLORS.GRAY,
      },
    },
    {
      name: "GraphQL keys",
      scope: ["meta.selectionset.graphql variable"],
      settings: {
        foreground: COLORS.GREEN,
      },
    },
    {
      name: "GraphQL function arguments",
      scope: ["meta.selectionset.graphql meta.arguments variable"],
      settings: {
        foreground: COLORS.GRAY,
      },
    },
    {
      name: "GraphQL fragment name (definition)",
      scope: ["entity.name.fragment.graphql", "variable.fragment.graphql"],
      settings: {
        foreground: COLORS.BLUE,
      },
    },
    {
      name: "Edge cases (foreground color resets)",
      scope: [
        "constant.other.symbol.hashkey.ruby",
        "keyword.operator.dereference.java",
        "keyword.operator.navigation.groovy",
        "meta.scope.for-loop.shell punctuation.definition.string.begin",
        "meta.scope.for-loop.shell punctuation.definition.string.end",
        "meta.scope.for-loop.shell string",
        "storage.modifier.import",
        "punctuation.section.embedded.begin.tsx",
        "punctuation.section.embedded.end.tsx",
        "punctuation.section.embedded.begin.jsx",
        "punctuation.section.embedded.end.jsx",
        "punctuation.separator.list.comma.css",
        "constant.language.empty-list.haskell",
      ],
      settings: {
        foreground: COLORS.GRAY,
      },
    },
    {
      name: 'Shell variables prefixed with "$" (edge case)',
      scope: ["source.shell variable.other"],
      settings: {
        foreground: COLORS.PURPLE,
      },
    },
    {
      name: "Powershell constants mistakenly scoped to `support`, rather than `constant` (edge)",
      scope: ["support.constant"],
      settings: {
        fontStyle: "normal",
        foreground: COLORS.PURPLE,
      },
    },
    {
      name: "Makefile prerequisite names",
      scope: ["meta.scope.prerequisites.makefile"],
      settings: {
        foreground: COLORS.GREEN,
      },
    },
    {
      name: "SCSS attibute selector strings",
      scope: ["meta.attribute-selector.scss"],
      settings: {
        foreground: COLORS.GREEN,
      },
    },
    {
      name: "SCSS attribute selector brackets",
      scope: [
        "punctuation.definition.attribute-selector.end.bracket.square.scss",
        "punctuation.definition.attribute-selector.begin.bracket.square.scss",
      ],
      settings: {
        foreground: COLORS.YELLOW,
      },
    },
    {
      name: "Haskell Pragmas",
      scope: ["meta.preprocessor.haskell"],
      settings: {
        foreground: COLORS.GRAY_DARK,
      },
    },
    {
      name: "Log file error",
      scope: ["log.error"],
      settings: {
        foreground: COLORS.RED,
        fontStyle: "bold",
      },
    },
    {
      name: "Log file warning",
      scope: ["log.warning"],
      settings: {
        foreground: COLORS.GREEN,
        fontStyle: "bold",
      },
    },
    // {
    //   name: "HTML Variable, Property",
    //   scope: [
    //     // "variable.property",
    //     "variable.other.property",
    //     "variable.object.property",
    //     "variable.other.object.property",
    //     "variable.other.enummember",
    //     "support.variable.property",
    //   ],
    //   settings: {
    //     foreground: COLORS.PURPLE,
    //   },
    // },
    // {
    //   name: "HTML Variable, Property",
    //   scope: [
    //     "expression.embbeded.vue variable.property",
    //     "expression.embbeded.vue variable.other.property",
    //     "expression.embbeded.vue variable.object.property",
    //     "expression.embbeded.vue variable.other.object.property",
    //     "expression.embbeded.vue variable.other.enummember",
    //     "expression.embbeded.vue support.variable.property",
    //   ],
    //   settings: {
    //     foreground: COLORS.PURPLE,
    //   },
    // },
    // {
    //   name: "Custom Classes HTML tags",
    //   scope: ["meta.tag.other.unrecognized.html.derivative entity.name.tag"],
    //   settings: {
    //     foreground: COLORS.BLUE,
    //   },
    // },
    // {
    //   name: "JS & TS Variable, Property",
    //   scope: LANGUAGES.map((language) => [
    //     `source.${language} variable.property`,
    //     `source.${language} variable.other.property`,
    //     `source.${language} variable.object.property`,
    //     `source.${language} variable.other.object.property`,
    //     `source.${language} variable.other.enummember`,
    //     `source.${language} support.variable.property`,
    //   ]).flat(),
    //   settings: {
    //     foreground: COLORS.PURPLE,
    //   },
    // },
    // {
    //   name: "Object Keys",
    //   scope: "meta.object-literal.key",
    //   settings: {
    //     foreground: COLORS.PURPLE,
    //   },
    // },
  ],
};
