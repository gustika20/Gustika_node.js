'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.




getContextPackagePath = getContextPackagePath;exports.



getFilePackagePath = getFilePackagePath;exports.




getFilePackageName = getFilePackageName;var _path = require('path');var _pkgUp = require('eslint-module-utils/pkgUp');var _pkgUp2 = _interopRequireDefault(_pkgUp);var _readPkgUp2 = require('eslint-module-utils/readPkgUp');var _readPkgUp3 = _interopRequireDefault(_readPkgUp2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}function getContextPackagePath(context) {return getFilePackagePath(context.getPhysicalFilename ? context.getPhysicalFilename() : context.getFilename());}function getFilePackagePath(filePath) {var fp = (0, _pkgUp2['default'])({ cwd: filePath });return (0, _path.dirname)(fp);}function getFilePackageName(filePath) {var _readPkgUp =
  (0, _readPkgUp3['default'])({ cwd: filePath, normalize: false }),pkg = _readPkgUp.pkg,path = _readPkgUp.path;
  if (pkg) {
    // recursion in case of intermediate esm package.json without name found
    return pkg.name || getFilePackageName((0, _path.dirname)((0, _path.dirname)(path)));
  }
  return null;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlL3BhY2thZ2VQYXRoLmpzIl0sIm5hbWVzIjpbImdldENvbnRleHRQYWNrYWdlUGF0aCIsImdldEZpbGVQYWNrYWdlUGF0aCIsImdldEZpbGVQYWNrYWdlTmFtZSIsImNvbnRleHQiLCJnZXRQaHlzaWNhbEZpbGVuYW1lIiwiZ2V0RmlsZW5hbWUiLCJmaWxlUGF0aCIsImZwIiwiY3dkIiwibm9ybWFsaXplIiwicGtnIiwicGF0aCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7O0FBS2dCQSxxQixHQUFBQSxxQjs7OztBQUlBQyxrQixHQUFBQSxrQjs7Ozs7QUFLQUMsa0IsR0FBQUEsa0IsQ0FkaEIsNEJBQ0Esa0QsNkNBQ0EsMkQscUpBR08sU0FBU0YscUJBQVQsQ0FBK0JHLE9BQS9CLEVBQXdDLENBQzdDLE9BQU9GLG1CQUFtQkUsUUFBUUMsbUJBQVIsR0FBOEJELFFBQVFDLG1CQUFSLEVBQTlCLEdBQThERCxRQUFRRSxXQUFSLEVBQWpGLENBQVAsQ0FDRCxDQUVNLFNBQVNKLGtCQUFULENBQTRCSyxRQUE1QixFQUFzQyxDQUMzQyxJQUFNQyxLQUFLLHdCQUFNLEVBQUVDLEtBQUtGLFFBQVAsRUFBTixDQUFYLENBQ0EsT0FBTyxtQkFBUUMsRUFBUixDQUFQLENBQ0QsQ0FFTSxTQUFTTCxrQkFBVCxDQUE0QkksUUFBNUIsRUFBc0M7QUFDckIsOEJBQVUsRUFBRUUsS0FBS0YsUUFBUCxFQUFpQkcsV0FBVyxLQUE1QixFQUFWLENBRHFCLENBQ25DQyxHQURtQyxjQUNuQ0EsR0FEbUMsQ0FDOUJDLElBRDhCLGNBQzlCQSxJQUQ4QjtBQUUzQyxNQUFJRCxHQUFKLEVBQVM7QUFDUDtBQUNBLFdBQU9BLElBQUlFLElBQUosSUFBWVYsbUJBQW1CLG1CQUFRLG1CQUFRUyxJQUFSLENBQVIsQ0FBbkIsQ0FBbkI7QUFDRDtBQUNELFNBQU8sSUFBUDtBQUNEIiwiZmlsZSI6InBhY2thZ2VQYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGlybmFtZSB9IGZyb20gJ3BhdGgnO1xuaW1wb3J0IHBrZ1VwIGZyb20gJ2VzbGludC1tb2R1bGUtdXRpbHMvcGtnVXAnO1xuaW1wb3J0IHJlYWRQa2dVcCBmcm9tICdlc2xpbnQtbW9kdWxlLXV0aWxzL3JlYWRQa2dVcCc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRleHRQYWNrYWdlUGF0aChjb250ZXh0KSB7XG4gIHJldHVybiBnZXRGaWxlUGFja2FnZVBhdGgoY29udGV4dC5nZXRQaHlzaWNhbEZpbGVuYW1lID8gY29udGV4dC5nZXRQaHlzaWNhbEZpbGVuYW1lKCkgOiBjb250ZXh0LmdldEZpbGVuYW1lKCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmlsZVBhY2thZ2VQYXRoKGZpbGVQYXRoKSB7XG4gIGNvbnN0IGZwID0gcGtnVXAoeyBjd2Q6IGZpbGVQYXRoIH0pO1xuICByZXR1cm4gZGlybmFtZShmcCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGaWxlUGFja2FnZU5hbWUoZmlsZVBhdGgpIHtcbiAgY29uc3QgeyBwa2csIHBhdGggfSA9IHJlYWRQa2dVcCh7IGN3ZDogZmlsZVBhdGgsIG5vcm1hbGl6ZTogZmFsc2UgfSk7XG4gIGlmIChwa2cpIHtcbiAgICAvLyByZWN1cnNpb24gaW4gY2FzZSBvZiBpbnRlcm1lZGlhdGUgZXNtIHBhY2thZ2UuanNvbiB3aXRob3V0IG5hbWUgZm91bmRcbiAgICByZXR1cm4gcGtnLm5hbWUgfHwgZ2V0RmlsZVBhY2thZ2VOYW1lKGRpcm5hbWUoZGlybmFtZShwYXRoKSkpO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuIl19