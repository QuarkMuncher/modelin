using ImageGet.Repositories;
using ImageGet.Models;
using ImageGet.BL;
using ImageGet.Helpers;

namespace ImageGet.Controllers
{
    public sealed class ImageAssetController
    {
        public ImageAssetController(string address, int nameBaseNumber)
        {
            //TODO: Prevent exceptions, by handling any errors before exceptions are thrown
            this.address = address;
            this.nameBaseNumber = nameBaseNumber;
        }
        private string address;
        private int nameBaseNumber;
        public async Task downloadImagesForEan(string ean, ImageAssetRepo repo, ImageClient client)
        {
            ImageAsset asset = this.getSingleImageRowByEan(ean, repo);
            List<string> imageLinks = new List<string>();
            if (asset.image01.Length != 0) { imageLinks.Add(asset.image01); }
            if (asset.image02.Length != 0) { imageLinks.Add(asset.image02); }
            if (asset.image03.Length != 0) { imageLinks.Add(asset.image03); }
            if (asset.image04.Length != 0) { imageLinks.Add(asset.image04); }
            if (asset.image05.Length != 0) { imageLinks.Add(asset.image05); }
            if (asset.image06.Length != 0) { imageLinks.Add(asset.image06); }
            if (asset.image07.Length != 0) { imageLinks.Add(asset.image07); }
            if (asset.image08.Length != 0) { imageLinks.Add(asset.image08); }
            if (asset.image09.Length != 0) { imageLinks.Add(asset.image09); }
            if (asset.image10.Length != 0) { imageLinks.Add(asset.image10); }
            if (asset.image11.Length != 0) { imageLinks.Add(asset.image11); }
            if (asset.image12.Length != 0) { imageLinks.Add(asset.image12); }
            if (asset.image13.Length != 0) { imageLinks.Add(asset.image13); }
            if (asset.image14.Length != 0) { imageLinks.Add(asset.image14); }
            if (asset.image15.Length != 0) { imageLinks.Add(asset.image15); }
            if (asset.image16.Length != 0) { imageLinks.Add(asset.image16); }
            if (asset.image17.Length != 0) { imageLinks.Add(asset.image17); }
            if (asset.image18.Length != 0) { imageLinks.Add(asset.image18); }
            if (asset.image19.Length != 0) { imageLinks.Add(asset.image19); }
            if (asset.isolatedimage1.Length != 0) { imageLinks.Add(asset.isolatedimage1); }
            if (asset.isolatedimage02.Length != 0) { imageLinks.Add(asset.isolatedimage02); }
            if (asset.isolatedimage03.Length != 0) { imageLinks.Add(asset.isolatedimage03); }
            if (asset.isolatedimage04.Length != 0) { imageLinks.Add(asset.isolatedimage04); }
            if (asset.isolatedimage05.Length != 0) { imageLinks.Add(asset.isolatedimage05); }
            if (asset.isolatedimage05.Length != 0) { imageLinks.Add(asset.isolatedimage05); }
            if (asset.isolatedimage06.Length != 0) { imageLinks.Add(asset.isolatedimage06); }
            if (asset.isolatedimage07.Length != 0) { imageLinks.Add(asset.isolatedimage07); }
            if (asset.isolatedimage08.Length != 0) { imageLinks.Add(asset.isolatedimage08); }
            if (asset.isolatedimage09.Length != 0) { imageLinks.Add(asset.isolatedimage09); }
            if (asset.isolatedimage10.Length != 0) { imageLinks.Add(asset.isolatedimage10); }

            for (int i = 0; i < imageLinks.Count; i++)
            {
                string[] pathParts = {
                    Directory.GetCurrentDirectory(),
                    "images",
                    ean,
                    $"{ean}_{i + this.nameBaseNumber}{TextHelpers.getFileExtension(imageLinks[i])}"
                };

                await client.downloadImage(imageLinks[i], $"{Path.Combine(pathParts)}", Path.Combine(Directory.GetCurrentDirectory(), "images", ean));
            }
        }
        public async Task processEanList(List<string> eanList)
        {
            ImageAssetRepo repo = new ImageAssetRepo(this.address);
            ImageClient client = new ImageClient();
            foreach (string ean in eanList)
            {
                try
                {
                    await this.downloadImagesForEan(ean, repo, client);
                }
                catch (System.Exception)
                {
                    Console.WriteLine("processEanList");
                }
            }
        }
        public ImageAsset getSingleImageRowByEan(string ean, ImageAssetRepo repo)
        {
            try
            {
                if (repo.imageAssets is null)
                {
                    throw new NullReferenceException($"Address: '{repo.address}' not reachable");
                }
                else
                {
                    IEnumerable<ImageAsset> asset = repo.imageAssets.Where(asset => asset.ean == ean);
                    if (asset.Any())
                    {
                        return asset.First();
                    }
                    else
                    {
                        Console.WriteLine(ean);
                        throw new KeyNotFoundException(ean);
                    }
                }
            }
            catch (System.Exception)
            {
                throw;
            }
        }
    }
}