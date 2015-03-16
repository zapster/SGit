\// Generated by CoffeeScript 1.6.3
(function() {
  var displayFileContent, rawCodes, lang;

  displayFileContent = function() {
    var highlighted, i, length, lineNumbers, lineNumbersList;
    if (!rawCodes) {
      rawCodes = CodeLoader.getCode();
    }
    console.log(rawCodes);
    if (lang) {
      highlighted = hljs.highlight(lang, rawCodes, true);
      $('.codes code').html(highlighted.value);
      $('.codes code').addClass(highlighted.language);
    } else {
      $('.codes code').html(rawCodes);
    }
    length = CodeLoader.getLineNumber();
    lineNumbersList = (function() {
      var _i, _results;
      _results = [];
      for (i = _i = 1; 1 <= length ? _i <= length : _i >= length; i = 1 <= length ? ++_i : --_i) {
        _results.push(i + '.');
      }
      return _results;
    })();
    lineNumbers = lineNumbersList.join('\n');
    return $('.line_numbers').html(lineNumbers);
  };

  window.display = displayFileContent;

  window.setLang = function(_lang) {
    lang = _lang;
    return displayFileContent();
  };

  $(document).ready(function() {
    return CodeLoader.loadCode();
  });

}).call(this);