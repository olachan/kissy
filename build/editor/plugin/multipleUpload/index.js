﻿/*
Copyright 2012, KISSY UI Library v1.40dev
MIT Licensed
build time: Jul 6 13:06
*/
/**
 * multipleUpload button
 * @author yiminghe@gmail.com
 */
KISSY.add("editor/plugin/multipleUpload/index", function (S, Editor, DialogLoader) {

    function multipleUpload(config) {
        this.config = config || {};
    }

    S.augment(multipleUpload, {
        renderUI:function (editor) {
            var self = this;
            editor.addButton("multipleUpload", {
                tooltip:"批量插图",
                listeners:{
                    click:function () {
                        DialogLoader.useDialog(editor, "multipleUpload", self.config);

                    }
                },
                mode:Editor.WYSIWYG_MODE
            });
        }
    });

    return multipleUpload;

}, {
    requires:['editor', '../dialogLoader/']
});
