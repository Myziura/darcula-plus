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

  CYAN: "#3fa2ae",

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
  colors: {
    "activityBar.background": "#2F333D",
    "activityBar.foreground": "#D7DAE0",
    "activityBarBadge.background": "#528bff",
    "activityBarBadge.foreground": "#F8FAFD",
    "button.background": "#528bff",
    "diffEditor.insertedTextBackground": "#00809B33",
    "dropdown.background": "#1d1f23",
    "dropdown.border": "#181A1F",
    "editor.background": "#282c34",
    "editor.findMatchBackground": "#42557B",
    "editor.findMatchHighlightBackground": "#314365",
    "editor.lineHighlightBackground": "#383E4A",
    "editor.selectionBackground": "#3E4451",
    "editorCursor.foreground": "#f8f8f0",
    "editorError.foreground": "#c24038",
    "editorGroup.emptyBackground": "#181A1F",
    "editorGroup.border": "#181A1F",
    "editorGroupHeader.tabsBackground": "#21252B",
    "editorIndentGuide.background": "#3B4048",
    "editorHoverWidget.background": "#21252B",
    "editorHoverWidget.border": "#181A1F",
    "editorLineNumber.foreground": "#495162",
    "editorRuler.foreground": "#484848",
    "editorSuggestWidget.background": "#21252B",
    "editorSuggestWidget.border": "#181A1F",
    "editorSuggestWidget.selectedBackground": "#2c313a",
    "editorUnnecessaryCode.opacity": "#000000c0",
    "editorWhitespace.foreground": "#484a50",
    "editorWidget.background": "#21252B",
    "input.background": "#1d1f23",
    "list.activeSelectionBackground": "#2c313a",
    "list.activeSelectionForeground": "#d7dae0",
    "list.focusBackground": "#383E4A",
    "list.highlightForeground": "#C5C5C5",
    "list.hoverBackground": "#292d35",
    "list.inactiveSelectionBackground": "#2c313a",
    "list.inactiveSelectionForeground": "#d7dae0",
    "notifications.background": "#21252b",
    "scrollbarSlider.activeBackground": "#747D9180",
    "scrollbarSlider.background": "#4E566680",
    "scrollbarSlider.hoverBackground": "#5A637580",
    "sideBar.background": "#21252b",
    "sideBarSectionHeader.background": "#282c34",
    "statusBar.background": "#21252B",
    "statusBar.foreground": "#9da5b4",
    "statusBarItem.hoverBackground": "#2c313a",
    "statusBar.noFolderBackground": "#21252B",
    "statusBar.debuggingBackground": "#21252B",
    "tab.activeBackground": "#383E4A",
    "tab.border": "#181A1F",
    "tab.inactiveBackground": "#21252B",
    "terminal.foreground": COLORS.GRAY,
    "terminal.ansiBlack": "#2d3139",
    "terminal.ansiBlue": "#528bff",
    "terminal.ansiGreen": COLORS.YELLOW,
    "terminal.ansiYellow": COLORS.GREEN,
    "terminal.ansiCyan": COLORS.CYAN,
    "terminal.ansiMagenta": "#c678dd",
    "terminal.ansiRed": COLORS.ORANGE,
    "terminal.ansiWhite": "#d7dae0",
    "terminal.ansiBrightBlack": "#7f848e",
    "terminal.ansiBrightBlue": "#528bff",
    "terminal.ansiBrightGreen": COLORS.YELLOW,
    "terminal.ansiBrightYellow": COLORS.GREEN,
    "terminal.ansiBrightCyan": COLORS.CYAN,
    "terminal.ansiBrightMagenta": "#7e0097",
    "terminal.ansiBrightRed": "#f44747",
    "terminal.ansiBrightWhite": "#d7dae0",
    "titleBar.activeBackground": "#282c34",
    "titleBar.activeForeground": "#9da5b4",
    "titleBar.inactiveBackground": "#282C34",
    "titleBar.inactiveForeground": "#6B717D",
  },
  tokenColors: [
    {
      name: "Comment",
      scope: ["comment", "string.comment"],
      settings: {
        foreground: "#676f7d",
      },
    },
    {
      name: "String",
      scope: ["string", "string.template"],
      settings: {
        foreground: COLORS.GREEN,
      },
    },
    {
      name: "Number",
      scope: "constant.numeric",
      settings: {
        // foreground: "#c678dd",
        foreground: COLORS.BLUE,
      },
    },
    {
      name: "Embedded String Begin/End",
      scope: [
        "string.embedded.begin",
        "string.embedded.end",
        "punctuation.definition.template-expression",
        "punctuation.section.embedded",
      ],
      settings: {
        // foreground: "#c678dd",
        foreground: COLORS.ORANGE,
      },
    },
    {
      name: "Default Embedded Color",
      scope: [
        "punctuation.section.embedded.begin.js",
        "punctuation.section.embedded.end.js",
        "punctuation.section.embedded.begin.erb",
        "punctuation.section.embedded.end.erb",
        "source.elixir.embedded",
        "punctuation.separator",
        "punctuation.accessor",
        "meta.brace",
      ],
      settings: {
        foreground: COLORS.GRAY,
      },
    },
    // added support.type.builtin
    {
      name: "Built-in constant",
      scope: ["constant.language", "support.type.builtin"],
      settings: {
        // foreground: COLORS.CYAN,
        foreground: COLORS.ORANGE,
      },
    },
    {
      name: "User-defined constant",
      scope: ["constant.character", "constant.other"],
      settings: {
        foreground: COLORS.CYAN,
      },
    },
    {
      name: "Language Variable",
      scope: "variable.language",
      settings: {
        foreground: COLORS.ORANGE,
      },
    },
    {
      name: "Keyword",
      scope: [
        "keyword",
        "keyword.operator.logical",
        "keyword.operator.constructor",
      ],
      settings: {
        foreground: COLORS.ORANGE,
      },
    },
    {
      name: "Keyword Operator",
      scope: "keyword.operator",
      settings: {
        foreground: COLORS.ORANGE,
      },
    },
    {
      name: "Storage",
      scope: "storage",
      settings: {
        foreground: COLORS.ORANGE,
      },
    },
    {
      name: "Types",
      scope: "storage.type",
      settings: {
        foreground: COLORS.ORANGE,
      },
    },
    // {
    //   name: "Class",
    //   scope: [
    //     "entity.name.class",
    //     "entity.name.module",
    //     "entity.name.type",
    //     "storage.identifier",
    //     "support.class",
    //   ],
    //   settings: {
    //     foreground: COLORS.BLUE,
    //   },
    // },
    {
      name: "Class",
      scope: ["entity.name.type.class"],
      settings: {
        foreground: COLORS.YELLOW,
      },
    },
    {
      name: "Types",
      scope: ["entity.name.type"],
      settings: {
        foreground: COLORS.BLUE,
      },
    },
    // MYZIURA new maybe remove
    {
      name: "Not Classes, not Functions",
      scope: [
        "entity.name.class",
        "entity.name.module",
        "storage.identifier",
        // "support.class",
      ],
      settings: {
        foreground: COLORS.BLUE,
      },
    },
    // {
    //   name: "Variable Object",
    //   scope: [
    //     "variable.other.object",
    //     "variable.other.constant",
    //     "variable.other.global",
    //     "variable.other.readwrite.class",
    //     "variable.other.readwrite.instance",
    //     "variable.other.readwrite.batchfile",
    //     "variable.readwrite",
    //     "variable.readwrite.other.block",
    //   ],
    //   settings: {
    //     foreground: COLORS.BLUE,
    //   },
    // },
    {
      name: "Other variable",
      scope: [
        "variable.other",
        "variable.other.property",
        "variable.other.block",
      ],
      settings: {
        foreground: COLORS.GRAY,
      },
    },
    {
      name: "Inherited Class",
      scope: "entity.other.inherited-class",
      settings: {
        foreground: COLORS.YELLOW,
      },
    },
    {
      name: "Package Import",
      scope: ["storage.modifier.import", "storage.modifier.package"],
      settings: {
        foreground: COLORS.BLUE,
      },
    },
    {
      name: "Function name",
      scope: ["entity.name.function", "support.function"],
      settings: {
        foreground: COLORS.YELLOW,
      },
    },
    // {
    //   name: "Function argument",
    //   scope: [
    //     "variable.parameter",
    //     "entity.name.variable.parameter",
    //     "parameter.variable",
    //   ],
    //   settings: {
    //     fontStyle: "italic",
    //     foreground: COLORS.CYAN,
    //   },
    // },
    {
      name: "Function call",
      scope: "entity.name.function-call",
      settings: {
        foreground: COLORS.GRAY,
      },
    },
    {
      name: "Builtin Functions",
      scope: ["function.support.builtin", "function.support.core"],
      settings: {
        foreground: COLORS.YELLOW,
      },
    },
    {
      name: "Tag Name",
      scope: ["entity.name.tag", "entity.name.tag.class.js"],
      settings: {
        foreground: COLORS.ORANGE,
      },
    },
    {
      name: "Tag Class and ID",
      scope: ["entity.name.tag.class", "entity.name.tag.id"],
      settings: {
        foreground: COLORS.CYAN,
      },
    },
    {
      name: "Tag Attribute",
      scope: "entity.other.attribute-name",
      settings: {
        foreground: COLORS.YELLOW,
      },
    },
    {
      name: "Library constant",
      scope: "support.constant",
      settings: {
        foreground: COLORS.CYAN,
      },
    },
    // new
    {
      name: "Library constant",
      scope: "support.constant.property-value",
      settings: {
        foreground: COLORS.GREEN_LIGHT,
      },
    },
    {
      // name: "Library class/type",
      name: "Library type",
      scope: [
        "support.type",
        // "support.variable",
      ],
      settings: {
        // foreground: COLORS.CYAN,
        foreground: COLORS.BLUE,
      },
    },
    // new
    {
      name: "module.exports",
      scope: ["support.type.object.module"],
      settings: {
        foreground: COLORS.ORANGE,
      },
    },
    {
      name: "Json Property",
      scope: "support.dictionary.json",
      settings: {
        foreground: COLORS.CYAN,
      },
    },
    {
      name: "StyleSheet Property name",
      scope: [
        "support.type.property-name.css",
        "support.type.property-name.scss",
        "support.type.property-name.less",
        "support.type.property-name.sass",
      ],
      settings: {
        foreground: COLORS.GRAY,
      },
    },
    {
      name: "CSS: Pseudo Attribute Names",
      scope: [
        "entity.other.attribute-name.pseudo-class.css",
        "entity.other.attribute-name.pseudo-class.scss",
        "entity.other.attribute-name.pseudo-class.less",
        "entity.other.attribute-name.pseudo-class.sass",
        "entity.other.attribute-name.pseudo-element.css",
        "entity.other.attribute-name.pseudo-element.scss",
        "entity.other.attribute-name.pseudo-element.less",
        "entity.other.attribute-name.pseudo-element.sass",
      ],
      settings: {
        foreground: COLORS.CYAN,
      },
    },
    {
      name: "StyleSheet Property value",
      scope: [
        "support.constant.css",
        "support.constant.scss",
        "support.constant.less",
        "support.constant.sass",
      ],
      settings: {
        foreground: COLORS.YELLOW,
      },
    },
    {
      name: "StyleSheet Variable",
      scope: [
        "variable.css",
        "variable.scss",
        "variable.less",
        "variable.sass",
      ],
      settings: {
        foreground: COLORS.CYAN,
      },
    },
    {
      name: "StyleSheet Variable String",
      scope: [
        "variable.css.string",
        "variable.scss.string",
        "variable.less.string",
        "variable.sass.string",
      ],
      settings: {
        foreground: COLORS.GREEN,
      },
    },
    {
      name: "StyleSheet Unit",
      scope: ["unit.css", "unit.scss", "unit.less", "unit.sass"],
      settings: {
        foreground: "#c678dd",
      },
    },
    {
      name: "StyleSheet Function",
      scope: [
        "function.css",
        "function.scss",
        "function.less",
        "function.sass",
      ],
      settings: {
        foreground: COLORS.CYAN,
      },
    },
    {
      name: "Library variable",
      scope: "support.other.variable",
      settings: {
        fontStyle: "",
      },
    },
    {
      name: "Invalid",
      scope: "invalid",
      settings: {
        background: "#c678dd",
        foreground: "#F8F8F0",
      },
    },
    {
      name: "Invalid deprecated",
      scope: "invalid.deprecated",
      settings: {
        background: COLORS.CYAN,
        foreground: "#F8F8F0",
      },
    },
    {
      name: "JSON String",
      scope: "support.type.property-name.json",
      settings: {
        // foreground: COLORS.CYAN,
        foreground: COLORS.GREEN,
      },
    },
    {
      name: "Link",
      scope: "string.detected-link",
      settings: {
        foreground: COLORS.BLUE,
      },
    },
    {
      name: "diff.header",
      scope: ["meta.diff", "meta.diff.header"],
      settings: {
        foreground: "#75715E",
      },
    },
    {
      name: "diff.deleted",
      scope: "markup.deleted",
      settings: {
        foreground: COLORS.ORANGE,
      },
    },
    {
      name: "diff.inserted",
      scope: "markup.inserted",
      settings: {
        foreground: COLORS.YELLOW,
      },
    },
    {
      name: "diff.changed",
      scope: "markup.changed",
      settings: {
        foreground: COLORS.GREEN,
      },
    },
    {
      scope: "constant.numeric.line-number.find-in-files - match",
      settings: {
        foreground: "#56b6c2A0",
      },
    },
    {
      scope: "entity.name.filename.find-in-files",
      settings: {
        foreground: COLORS.GREEN,
      },
    },
    {
      name: "Markup: Emphasis",
      scope: "markup.italic, markup.italic.markdown",
      settings: {
        fontStyle: "italic",
      },
    },
    {
      name: "Markup: Punctuation",
      scope: [
        "punctuation.definition.italic.markdown",
        "punctuation.definition.bold.markdown",
        "punctuation.definition.heading.markdown",
      ],
      settings: {
        foreground: "#676f7d",
      },
    },
    {
      name: "Markup: Emphasis Punctuation",
      scope: "punctuation.definition.italic.markdown",
      settings: {
        fontStyle: "italic",
      },
    },
    {
      name: "Markdown: Link",
      scope: "markup.underline.link.markdown",
      settings: {
        foreground: COLORS.BLUE,
      },
    },
    {
      name: "Markup: Bold",
      scope: "markup.bold.markdown",
      settings: {
        fontStyle: "bold",
      },
    },
    {
      name: "Markup: Heading",
      scope: "markup.heading.markdown",
      settings: {
        fontStyle: "bold",
        foreground: COLORS.ORANGE,
      },
    },
    {
      name: "Markup: Quote",
      scope: "markup.quote.markdown",
      settings: {
        foreground: COLORS.YELLOW,
      },
    },
    {
      name: "Markup: Separator",
      scope: "meta.separator.markdown",
      settings: {
        foreground: "#c678dd",
        fontStyle: "bold",
      },
    },
    {
      name: "Markup: Raw",
      scope: ["markup.raw.inline.markdown", "markup.raw.block.markdown"],
      settings: {
        foreground: COLORS.CYAN,
      },
    },
    {
      name: "Markup: List Punctuation",
      scope: "punctuation.definition.list_item.markdown",
      settings: {
        fontStyle: "bold",
        foreground: COLORS.WHITE,
      },
    },
  ],
};
