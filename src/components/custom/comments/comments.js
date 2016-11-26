define('framework/comments/comments', ['exports', 'framework/string', 'framework/jquery', 'framework/utils', 'framework/store', 'framework/translations'], function (exports, __dep0__, __dep1__, utils, store, translations) {

  'use strict';

  var comments, idsInUse, module, throwError;

  module = {};

  module.config = {
    globalDialogSelector: "",
    globalFullscreenLoaderSelector: "",
    showTeaserComments: false,
    showCommentsCount: true,
    commentRules: "Ehrverletzende, rassistische, unsachliche, themenfremde Kommentare werden gelöscht.",
    env: ""
  };

  idsInUse = [];

  throwError = function(errorMessage) {
    throw "Comments error: " + errorMessage;
  };

  comments = {
    insert: function(targetEl, commentsId, options) {
      var $targetEl, callback;
      this.configure = function() {
        return throwError("configure() must not be called after insert()");
      };
      if (arguments.length <= 1) {
        throwError("Parameters missing, pass '<element id>, <comments id>, <callback>|<options>'");
      }
      if (idsInUse.indexOf(commentsId) > -1) {
        throwError("The provided comments id is already in use");
      }
      if (typeof options === "function") {
        callback = options;
      }
      options = $.extend({}, options);
      options.callback = options.callback || callback || function() {};
      $targetEl = $(targetEl);
      $targetEl.data("commentsId", commentsId);
      idsInUse.push(commentsId);
      $targetEl.addClass("NnComments");
      return ReactDOM.render(React.createElement(require("framework/comments/CommentsList/component")["default"], {
        commentsId: commentsId,
        callback: options.callback,
        globalDialogSelector: module.config.globalDialogSelector,
        globalFullscreenLoaderSelector: module.config.globalFullscreenLoaderSelector,
        apiUrl: module.config.apiUrl,
        wemfUrls: options.wemfUrls || [],
        showTeaserComments: module.config.showTeaserComments,
        showCommentsCount: module.config.showCommentsCount,
        rules: (function() {
          if (module.config.env === "mobile") {
            return module.config.commentRules.replace("%rulesLink%", "/articles/19367311");
          } else {
            return module.config.commentRules.replace("%rulesLink%", "/19367311");
          }
        })()
      }), targetEl);
    },
    configure: function(config) {
      $.extend(module.config, config);
      translations.translations.configure(module.config.language);
      utils.utils.configure({
        language: module.config.language
      });
      return store.store.configure({
        apiUrl: module.config.apiUrl
      });
    },
    remove: function(targetEl) {
      var commentsId;
      commentsId = $(targetEl).data("commentsId");
      idsInUse = _.without(idsInUse, commentsId);
      return ReactDOM.unmountComponentAtNode(targetEl);
    }
  };

  exports.comments = comments;

});