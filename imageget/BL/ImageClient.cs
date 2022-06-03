namespace ImageGet.BL
{
    public class ImageClient
    {
        private static readonly HttpClient client = new HttpClient();
        public async Task downloadImage(string uri, string outPath, string outDir)
        {
            if (!File.Exists(outDir))
            {
                Directory.CreateDirectory(outDir);
            }

            byte[] fileBytes = await client.GetByteArrayAsync(uri);
            File.WriteAllBytes(outPath, fileBytes);
        }
    }
}