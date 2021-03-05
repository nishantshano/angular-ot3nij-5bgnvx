import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <kendo-editor [value]="value" style="height: 450px;">
            <kendo-toolbar>
                <kendo-toolbar-buttongroup>
                    <kendo-toolbar-button kendoEditorUndoButton></kendo-toolbar-button>
                    <kendo-toolbar-button kendoEditorRedoButton></kendo-toolbar-button>
                </kendo-toolbar-buttongroup>
                <kendo-toolbar-buttongroup>
                    <kendo-toolbar-button kendoEditorBoldButton></kendo-toolbar-button>
                    <kendo-toolbar-button kendoEditorItalicButton></kendo-toolbar-button>
                    <kendo-toolbar-button kendoEditorUnderlineButton></kendo-toolbar-button>
                    <kendo-toolbar-button kendoEditorStrikethroughButton></kendo-toolbar-button>
                </kendo-toolbar-buttongroup>
                <kendo-toolbar-buttongroup>
                    <kendo-toolbar-button kendoEditorSubscriptButton></kendo-toolbar-button>
                    <kendo-toolbar-button kendoEditorSuperscriptButton></kendo-toolbar-button>
                </kendo-toolbar-buttongroup>
                <kendo-toolbar-buttongroup>
                    <kendo-toolbar-button kendoEditorAlignLeftButton></kendo-toolbar-button>
                    <kendo-toolbar-button kendoEditorAlignCenterButton></kendo-toolbar-button>
                    <kendo-toolbar-button kendoEditorAlignRightButton></kendo-toolbar-button>
                    <kendo-toolbar-button kendoEditorAlignJustifyButton></kendo-toolbar-button>
                </kendo-toolbar-buttongroup>
                <kendo-toolbar-dropdownlist kendoEditorFormat></kendo-toolbar-dropdownlist>
                <kendo-toolbar-dropdownlist kendoEditorFontSize></kendo-toolbar-dropdownlist>
                <kendo-toolbar-dropdownlist kendoEditorFontFamily></kendo-toolbar-dropdownlist>
                <kendo-toolbar-colorpicker kendoEditorForeColor></kendo-toolbar-colorpicker>
                <kendo-toolbar-colorpicker kendoEditorBackColor></kendo-toolbar-colorpicker>
                <kendo-toolbar-buttongroup>
                    <kendo-toolbar-button kendoEditorInsertUnorderedListButton></kendo-toolbar-button>
                    <kendo-toolbar-button kendoEditorInsertOrderedListButton></kendo-toolbar-button>
                    <kendo-toolbar-button kendoEditorIndentButton></kendo-toolbar-button>
                    <kendo-toolbar-button kendoEditorOutdentButton></kendo-toolbar-button>
                </kendo-toolbar-buttongroup>
                <kendo-toolbar-buttongroup>
                    <kendo-toolbar-button kendoEditorCreateLinkButton></kendo-toolbar-button>
                    <kendo-toolbar-button kendoEditorUnlinkButton></kendo-toolbar-button>
                </kendo-toolbar-buttongroup>
                <kendo-editor-insert-table-button></kendo-editor-insert-table-button>
                <kendo-toolbar-buttongroup>
                    <kendo-toolbar-button kendoEditorAddColumnBeforeButton></kendo-toolbar-button>
                    <kendo-toolbar-button kendoEditorAddColumnAfterButton></kendo-toolbar-button>
                    <kendo-toolbar-button kendoEditorAddRowBeforeButton></kendo-toolbar-button>
                    <kendo-toolbar-button kendoEditorAddRowAfterButton></kendo-toolbar-button>
                </kendo-toolbar-buttongroup>
                <kendo-toolbar-buttongroup>
                    <kendo-toolbar-button kendoEditorDeleteColumnButton></kendo-toolbar-button>
                    <kendo-toolbar-button kendoEditorDeleteRowButton></kendo-toolbar-button>
                    <kendo-toolbar-button kendoEditorDeleteTableButton></kendo-toolbar-button>
                </kendo-toolbar-buttongroup>
                <kendo-toolbar-button kendoEditorInsertFileButton></kendo-toolbar-button>
                <kendo-toolbar-button kendoEditorInsertImageButton></kendo-toolbar-button>
                <kendo-toolbar-button kendoEditorViewSourceButton></kendo-toolbar-button>
                <kendo-toolbar-button kendoEditorCleanFormattingButton></kendo-toolbar-button>
            </kendo-toolbar>
        </kendo-editor>
    `
})
export class AppComponent {
    public value = `
        <p>
            The Kendo Angular UI Editor allows your users to edit HTML in a familiar, user-friendly way.<br />
            In this version, the Editor provides the core HTML editing engine, which includes basic text formatting, hyperlinks and lists.
            The widget <strong>outputs identical HTML</strong> across all major browsers, follows
            accessibility standards, and provides API for content manipulation.
        </p>
        <p>Features include:</p>
        <ul>
            <li>Text formatting</li>
            <li>Bulleted and numbered lists</li>
            <li>Hyperlinks</li>
            <li>Cross-browser support</li>
            <li>Identical HTML output across browsers</li>
        </ul>
    `;
}
