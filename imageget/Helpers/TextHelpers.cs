using System.Text.RegularExpressions;

namespace ImageGet.Helpers
{
    public static class TextHelpers
    {
        public static string getFileExtension(string filePath)
        {
            Regex matcher = new Regex(@"\.\w{3,4}($|\?)");
            return matcher.Match(filePath).Groups[0].Value;
        }
    }
}