﻿using ImageGet.Controllers;

namespace ImageGet
{
    class Program
    {
        static async Task Main()
        {
            ImageAssetController imageAssetController = new ImageAssetController("https://transport.productsup.io/721e0cc3498577ce9e56/channel/321307/LW_DE_Product_data.csv", 2);
            List<string> eanList = new List<string>() {
                "7318304013125",
                "7318304017529",
                "7318304047502",
                "7318304052506",
                "7318304053107",
                "7318304057501",
                "7318304062505",
                "7318304063106",
                "7318304067500",
                "7318304072504",
                "7318304077509",
                "7318304082503",
                "7318304087508",
                "7318308063027",
                "7318308062020",
                "7318308056029",
                "7318308053028",
                "7318308052021",
                "7318307594003",
                "7318305542525",
                "7318307807004",
                "7318307808001",
                "7318307809008",
                "7318307810004",
                "7318307453003",
                "7318307454000",
                "7318307274370",
                "7318307273373",
                "7318307595000",
                "7318307011609",
                "7318307011258",
                "7318307819977",
                "7318301092024",
                "7318301097524",
                "7318308066028",
                "7318307975253",
                "7318307974256",
                "7318302723026",
                "7318302713027",
                "7318304363206",
                "7318304367501",
                "7318304353207",
                "7318304357502",
                "7318307819755",
                "7318307814255",
                "7318307814750",
                "7318307350753",
                "7318307347807",
                "7318307348804",
                "7318307349801",
                "7318307352757",
                "7318307959314",
                "7318307946376",
                "7318307870374",
                "7318307891256",
                "7318307891379",
                "7318307972252",
                "7318307972375",
                "7318304403209",
                "7318304343208",
                "7318304393203",
                "7318304347503",
                "7318303477584",
                "7318303487583",
                "7318303497582",
                "7318307349757",
                "7318307347753",
                "7318307348750",
                "7318307940800",
                "7318307940374",
                "7318307959376",
                "7318307822755",
                "7318307973259",
                "7318307973372",
                "7318307854374",
                "7318307854251",
                "7318307532753",
                "7318307530759",
                "7318307533750",
                "7318307214253",
                "7318307214604",
                "7318307212754",
                "7318307231755",
                "7318307985252",
                "7318307986259",
                "7318304806000",
                "7318304802507",
                "7318305333208",
                "7318305337503",
                "7318307853254",
                "7318307853377",
                "7318307891805",
                "7318307821307",
                "7318307821758",
                "7318307212600",
                "7318307231601",
                "7318307212259",
                "7318307231250",
                "7318307213751",
                "7318307232752",
                "7318307213607",
                "7318307232608",
                "7318307852370",
                "7318305047501",
                "7318305227507",
                "7318304329004",
                "7318304339003",
                "7318307958256",
                "7318307958379",
                "7318307940312",
                "7318307213256",
                "7318307232257",
                "7318307236255",
                "7318307236606",
                "7318307236750",
                "7318307229608",
                "7318307229257",
                "7318304389008",
                "7318307531251",
                "7318307531756",
                "7318307992373",
                "7318307230253",
                "7318307230604",
                "7318307230758",
                "7318307229752",
                "7318305032507",
                "7318308593722",
                "7318305037502",
                "7318304267504",
                "7318307933314",
                "7318305237506",
                "7318307911312",
                "7318307934311",
                "7318307911374",
                "7318304470003",
                "7318307817751",
                "7318304272508",
                "7318304277503",
                "7318307820751",
                "7318307945379",
                "7318307944372",
                "7318307948370",
                "7318307949377",
                "7318307850376",
                "7318307517323",
                "7318307517255",
                "7318307541328",
                "7318307300321",
                "7318307302325",
                "7318307303322",
                "7318307302752",
                "7318302497590",
                "7318302457594",
                "7318302467593",
                "7318302487591",
                "7318302477592",
                "7318304557506",
                "7318305137523",
                "7318307517750",
                "7318307342253",
                "7318307342307",
                "7318307598001",
                "7318307598308",
                "7318307598759",
                "7318307303759",
                "7318307522754",
                "7318307592009",
                "7318307512250",
                "7318307512328",
                "7318302687595",
                "7318307023206",
                "7318305147522",
                "7318304503022",
                "7318304533005",
                "7318304153104",
                "7318304152503",
                "7318304157508",
                "7318307341256",
                "7318307341300",
                "7318307512755",
                "7318307516258",
                "7318307516326",
                "7318307516753",
                "7318307571004",
                "7318307571301",
                "7318306613200",
                "7318306623209",
                "7318307013207",
                "7318307003208",
                "7318307900804",
                "7318307900903",
                "7318307932317",
                "7318307990379",
                "7318307310320",
                "7318307310757",
                "7318307593006",
                "7318307511253",
                "7318307511321",
                "7318307511758",
                "7318307515251",
                "7318307571325",
                "7318307571752",
                "7318307542004",
                "7318306603201",
                "7318307301328",
                "7318307311327",
                "7318307311754",
                "7318305167506",
                "7318307900316",
                "7318307908312",
                "7318307908374",
                "7318307904314",
                "7318307907315",
                "7318307515329",
                "7318307515756",
                "7318307572001",
                "7318307572308",
                "7318307572322",
                "7318307572759",
                "7318307879377",
                "7318307878370",
                "7318307880373",
                "7318307542325",
                "7318305167520",
                "7318307907377",
                "7318307929317",
                "7318307930313",
                "7318307931310",
                "7318307541007",
                "7318307335255",
                "7318307321258",
                "7318307322255",
                "7318307322750",
                "7318307991376",
                "7318307858372",
                "7318304982506",
                "7318304987501",
                "7318304962508",
                "7318304967503",
                "7318307335750",
                "7318307321753",
                "7318307818970",
                "7318307818758",
                "7318307978254",
                "7318307978377",
                "7318307823752",
                "7318307977257",
                "7318307977370",
                "7318304142504",
                "7318304147509",
                "7318304832504",
                "7318305192508",
                "7318304837509",
                "7318305197503",
                "7318304812506",
                "7318305153127",
                "7318305157521",
                "7318307510300",
                "7318304102508",
                "7318304112507",
                "7318304107503",
                "7318304117502",
                "7318307824254",
                "7318307523324",
                "7318307523379",
                "7318307811759",
                "7318305182509",
                "7318304817501",
                "7318305187504",
                "7318305662506",
                "7318305667501",
                "7318307510751",
                "7318307815252",
                "7318307815757",
                "7318307813258",
                "7318307813753",
                "7318305103122",
                "7318305107526",
                "7318305913202",
                "7318305923201",
                "7318305903203",
                "7318304242594",
                "7318307812756",
                "7318307528756",
                "7318307527759",
                "7318304257536",
                "7318307325003",
                "7318307325324",
                "7318307325751",
                "7318307326000",
                "7318304247599",
                "7318304237590",
                "7318309273128",
                "7318307924312",
                "7318307936315",
                "7318307925319",
                "7318307326321",
                "7318307326758",
                "7318304172501",
                "7318307950373",
                "7318305686007",
                "7318305682504",
                "7318307816259",
                "7318307816754",
                "7318307561005",
                "7318307562002",
                "7318304177506",
                "7318305527508",
                "7318304123206",
                "7318304122506",
                "7318305687509",
                "7318305716001",
                "7318305712508",
                "7318305717503",
                "7318305696006",
                "7318305133020",
                "7318307513752",
                "7318307514308",
                "7318307560008",
                "7318307524253",
                "7318307524321",
                "7318307524376",
                "7318304129000",
                "7318304127501",
                "7318305563209",
                "7318305566002",
                "7318305692503",
                "7318305697508",
                "7318307523256",
                "7318305562509",
                "7318305567504",
                "7318305647503",
                "7318305123120",
                "7318305127524",
                "7318307214758",
                "7318307215250",
                "7318304567505",
                "7318307215601",
                "7318307215755",
                "7318307011753",
                "7318304807502",
                "7318305339002",
            };
            try
            {
                await imageAssetController.processEanList(eanList);
            }
            catch (System.Exception e)
            {
                Console.WriteLine(e);
            }
        }
    }
}
