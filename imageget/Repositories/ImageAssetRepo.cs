using ImageGet.Models;
using ImageGet.BL;
using CsvHelper;

namespace ImageGet.Repositories
{
    public sealed class ImageAssetRepo
    {
        public ImageAssetRepo(string address)
        {
            this.address = address;
            //Temporary version
            CsvClient client = new CsvClient();
            CsvReader reader = client.GetLocalCsvReader();
            this.imageAssets = reader.GetRecords<ImageAsset>().ToList();
        }

        private async Task<ImageAssetRepo> InitAsync(string address)
        {
            ImageAssetRepo repo = new ImageAssetRepo(address);
            CsvClient client = new CsvClient();
            CsvReader reader = await client.GetCsvReader(address);
            this.imageAssets = reader.GetRecords<ImageAsset>().ToList();
            return this;
        }

        public static Task<ImageAssetRepo> CreateAsync(string address)
        {
            ImageAssetRepo ret = new ImageAssetRepo(address);
            return ret.InitAsync(address);
        }

        public string address { get; set; }
        public List<ImageAsset>? imageAssets { get; set; }
    }
}
