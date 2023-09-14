"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cheerio = __importStar(require("cheerio"));
const axios_1 = __importDefault(require("axios"));
// @ts-ignore
async function fetchCollegeContact(collegesURL, outputXLXSFilePath, pageCount) {
    // @ts-ignore
    let url = pageCount === 1 ? collegesURL : `${collegesURL}?page=${pageCount}`;
    let collegeContact = [];
    try {
        const collegesInfoHTML = await axios_1.default.get(url);
        const $ = cheerio.load(collegesInfoHTML.data);
        const $table = $('.table').children('tbody').children('tr');
        const baseURL = 'https://studyinkenya.co.ke';
        // console.log($table)
        $table.each((_index, $el) => {
            const td = $($el).children('td').text();
            const emaiLink = $($el).children('td').children('a').attr();
            const link = {
                href: `${baseURL}${emaiLink === null || emaiLink === void 0 ? void 0 : emaiLink.href}`,
                name: `${emaiLink === null || emaiLink === void 0 ? void 0 : emaiLink.href.slice(0, emaiLink === null || emaiLink === void 0 ? void 0 : emaiLink.href.indexOf(''))}`,
                college: `${td}` // phone
            };
            collegeContact.push(link);
            console.log(link);
        });
        return collegeContact;
    }
    catch (error) {
        console.log(error);
    }
}
const main = async () => {
    const KENYAN_TERTIARY_COLLEGES_URL = 'https://studyinkenya.co.ke/telephone-contacts-of-universities-and-colleges-in-kenya';
    let totalPagecount = 9;
    let currentPage = 1;
    let links = [];
    try {
        do {
            links = await fetchCollegeContact(KENYAN_TERTIARY_COLLEGES_URL, '', currentPage);
            totalPagecount--;
            currentPage++;
            console.log(currentPage);
        } while (totalPagecount !== 0);
        console.log(links);
    }
    catch (error) {
    }
    console.log(links);
};
main()
    .catch(err => console.log(err));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUFrQztBQUNsQyxrREFBeUI7QUFVekIsYUFBYTtBQUNiLEtBQUssVUFBVSxtQkFBbUIsQ0FBQyxXQUFtQixFQUFFLGtCQUEwQixFQUFFLFNBQWlCO0lBQ2pHLGFBQWE7SUFDYixJQUFJLEdBQUcsR0FBVyxTQUFTLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxTQUFTLFNBQVMsRUFBRSxDQUFBO0lBQ3BGLElBQUksY0FBYyxHQUEwQixFQUFFLENBQUE7SUFDOUMsSUFBSTtRQUNBLE1BQU0sZ0JBQWdCLEdBQUcsTUFBTSxlQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzdDLE1BQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDN0MsTUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDM0QsTUFBTSxPQUFPLEdBQUcsNEJBQTRCLENBQUE7UUFFNUMsc0JBQXNCO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFjLEVBQUUsR0FBb0IsRUFBRSxFQUFFO1lBQ2pELE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUE7WUFDdkMsTUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUE7WUFDM0QsTUFBTSxJQUFJLEdBQUc7Z0JBQ1QsSUFBSSxFQUFFLEdBQUcsT0FBTyxHQUFHLFFBQVEsYUFBUixRQUFRLHVCQUFSLFFBQVEsQ0FBRSxJQUFJLEVBQUU7Z0JBQ25DLElBQUksRUFBRSxHQUFHLFFBQVEsYUFBUixRQUFRLHVCQUFSLFFBQVEsQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxRQUFRLGFBQVIsUUFBUSx1QkFBUixRQUFRLENBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO2dCQUM5RCxPQUFPLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxRQUFRO2FBRTVCLENBQUM7WUFFRixjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7UUFFckIsQ0FBQyxDQUFDLENBQUE7UUFDRixPQUFPLGNBQWMsQ0FBQTtLQUN4QjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtLQUNyQjtBQUNMLENBQUM7QUFDRCxNQUFNLElBQUksR0FBRyxLQUFLLElBQW1CLEVBQUU7SUFDbkMsTUFBTSw0QkFBNEIsR0FBRyxxRkFBcUYsQ0FBQTtJQUMxSCxJQUFJLGNBQWMsR0FBRyxDQUFDLENBQUE7SUFDdEIsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFBO0lBQ25CLElBQUksS0FBSyxHQUEwQixFQUFFLENBQUE7SUFFckMsSUFBSTtRQUVBLEdBQUc7WUFDQyxLQUFLLEdBQUcsTUFBTSxtQkFBbUIsQ0FBQyw0QkFBNEIsRUFBRSxFQUFFLEVBQUUsV0FBVyxDQUEwQixDQUFBO1lBRXpHLGNBQWMsRUFBRSxDQUFBO1lBQ2hCLFdBQVcsRUFBRSxDQUFBO1lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQTtTQUMzQixRQUFRLGNBQWMsS0FBSyxDQUFDLEVBQUU7UUFJL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtLQUNyQjtJQUFDLE9BQU8sS0FBSyxFQUFFO0tBRWY7SUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO0FBQ3RCLENBQUMsQ0FBQTtBQUVELElBQUksRUFBRTtLQUNELEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQSJ9