import * as cheerio from 'cheerio'
import axios from 'axios'

type MoreInforLinks = {
    href: string
    name: string
    college: string,
    phone: number
}

const main = async (): Promise<void> => {
    const baseURL = 'https://studyinkenya.co.ke/'
    const KENYAN_TERTIARY_COLLEGES_URL = 'https://studyinkenya.co.ke/telephone-contacts-of-universities-and-colleges-in-kenya'
    // let _pageCount = 1
    let links: Array<MoreInforLinks> = []

    try {
        const collegesInfoHTML = await axios.get(KENYAN_TERTIARY_COLLEGES_URL)
        const $ = cheerio.load(collegesInfoHTML.data)
        const $table = $('.table').children('tbody').children('tr')

        // console.log($table)
        $table.each((_index: number, $el: cheerio.Element) => {
            const td = $($el).children('td').children('tr').text()

            const emaiLink = $($el).children('td').children('a').attr()
            const link = {
                href: `${baseURL}${emaiLink?.href}`,
                name: `${emaiLink?.href.slice(0, emaiLink?.href.indexOf('.'))}`,
            };
        })
    } catch (error) {

    }
}

main()
    .catch(err => console.log(err))