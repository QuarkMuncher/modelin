using System.Net.Http.Headers;
using CsvHelper;
using CsvHelper.Configuration;

namespace ImageGet.BL
{
    class CsvClient
    {
        private static readonly HttpClient client = new HttpClient();

        public async Task<CsvReader> GetCsvReader(string address)
        {
            client.DefaultRequestHeaders.Accept.Clear();
            client.DefaultRequestHeaders.Accept.Add(
                new MediaTypeWithQualityHeaderValue("application/vnd.github.v3+json"));
            client.DefaultRequestHeaders.Add("User-Agent", ".NET Foundation Repository Reporter");

            var streamTask = client.GetStreamAsync(address);
            var feeds = new StreamReader(await streamTask);
            CsvReader reader = new CsvReader(feeds, System.Globalization.CultureInfo.InvariantCulture);

            return reader;
        }

        public CsvReader GetLocalCsvReader()
        {
            CsvConfiguration config = new CsvConfiguration(System.Globalization.CultureInfo.InvariantCulture)
            {
                HeaderValidated = null,
                MissingFieldFound = null
            };

            StreamReader stream = new StreamReader("/home/peon/personalprojects/imageget/source.csv");
            CsvReader reader = new CsvReader(stream, config);

            return reader;
        }
    }
}
