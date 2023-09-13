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
const main = async () => {
    const KENYAN_TERTIARY_COLLEGES_URL = 'https://studyinkenya.co.ke/telephone-contacts-of-universities-and-colleges-in-kenya';
    // let _pageCount = 1
    let links = [];
    try {
        const collegesInfoHTML = await axios_1.default.get(KENYAN_TERTIARY_COLLEGES_URL);
        const $ = cheerio.load(collegesInfoHTML.data);
        const $table = $('.table').children('tbody').children('tr');
        // console.log($table)
        $table.each((_index, $el) => {
            const td = $($el).children('td').text();
            console.log(td.length);
            const emaiLink = $($el).children('td').children('a').attr();
            links.push();
            console.log(td);
            console.log(emaiLink);
        });
    }
    catch (error) {
    }
};
main()
    .catch(err => console.log(err));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUFrQztBQUNsQyxrREFBeUI7QUFNekIsTUFBTSxJQUFJLEdBQUcsS0FBSyxJQUFtQixFQUFFO0lBQ25DLE1BQU0sNEJBQTRCLEdBQUcscUZBQXFGLENBQUE7SUFDMUgscUJBQXFCO0lBQ3JCLElBQUksS0FBSyxHQUEwQixFQUFFLENBQUE7SUFFckMsSUFBSTtRQUNBLE1BQU0sZ0JBQWdCLEdBQUcsTUFBTSxlQUFLLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUE7UUFDdEUsTUFBTSxDQUFDLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUM3QyxNQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUUzRCxzQkFBc0I7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQWMsRUFBRSxHQUFvQixFQUFFLEVBQUU7WUFDakQsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtZQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUN0QixNQUFNLFFBQVEsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtZQUUzRCxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUE7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUN6QixDQUFDLENBQUMsQ0FBQTtLQUNMO0lBQUMsT0FBTyxLQUFLLEVBQUU7S0FFZjtBQUNMLENBQUMsQ0FBQTtBQUVELElBQUksRUFBRTtLQUNELEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQSJ9