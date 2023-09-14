import * as cheerio from 'cheerio'
import axios from 'axios'

type MoreInforLinks = {
    href: string
    name: string
    college: string,
    // phone: number
}


// @ts-ignore
async function fetchCollegeContact(collegesURL: string, outputXLXSFilePath: string, pageCount: number): Promise<Array<MoreInforLinks> | undefined> {
    // @ts-ignore
    let url: string = pageCount === 1 ? collegesURL : `${collegesURL}?page=${pageCount}`
    let collegeContact: Array<MoreInforLinks> = []
    try {
        const collegesInfoHTML = await axios.get(url)
        const $ = cheerio.load(collegesInfoHTML.data)
        const $table = $('.table').children('tbody').children('tr')
        const baseURL = 'https://studyinkenya.co.ke'

        // console.log($table)
        $table.each((_index: number, $el: cheerio.Element) => {
            const td = $($el).children('td').text()
            const emaiLink = $($el).children('td').children('a').attr()
            const link = {
                href: `${baseURL}${emaiLink?.href}`,
                name: `${emaiLink?.href.slice(0, emaiLink?.href.indexOf(''))}`,
                college: `${td}` // phone

            };

            collegeContact.push(link)
            console.log(link)

        })
        return collegeContact
    } catch (error) {
        console.log(error)
    }
}
const main = async (): Promise<void> => {
    const KENYAN_TERTIARY_COLLEGES_URL = 'https://studyinkenya.co.ke/telephone-contacts-of-universities-and-colleges-in-kenya'
    let totalPagecount = 9
    let currentPage = 1
    let links: Array<MoreInforLinks> = []

    try {

        do {
            links = await fetchCollegeContact(KENYAN_TERTIARY_COLLEGES_URL, '', currentPage) as Array<MoreInforLinks>

            totalPagecount--
            currentPage++
            console.log(currentPage)
        } while (totalPagecount !== 0);



        console.log(links)
    } catch (error) {

    }
    console.log(links)
}

main()
    .catch(err => console.log(err))