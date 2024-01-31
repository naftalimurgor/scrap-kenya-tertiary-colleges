const cheerio = require('cheerio')
const xlxsJson = require('node-json-xlsx')
const axios = require('axios')
const fs = require('fs/promises')

async function fetchCollegeContact(collegesURL, outputXLXSFilePath, pageCount) {
	// @ts-ignore
	let url = pageCount === 1 ? collegesURL : `${collegesURL}?page=${pageCount}`
	let collegeContact = []
	try {
		const collegesInfoHTML = await axios.get(url)
		const $ = cheerio.load(collegesInfoHTML.data)
		const $table = $('.table').children('tbody').children('tr')
		const baseURL = 'https://studyinkenya.co.ke'
		// console.log($table)
		// console.log($table)
		$table.each(async (_index, $el) => {
			const td = $($el).children('td').text()
			const emaiLink = $($el).children('td').children('a').attr()
			const links = {
				href: `${baseURL}${emaiLink?.href.trim()}`,
				name: `${emaiLink?.href.slice(0, emaiLink?.href.indexOf('@')).trim()}`
			};

			let trimmedPath = emaiLink.href?.replace(/^\/institutions\//, '/');
			// <i class="fa fa-info-circle"></i> More Contact
			const moreInfo = `https://studyinkenya.co.ke${trimmedPath}-contact-telephone-numbers`
			const collegesContactInfo = await axios.get(moreInfo)
			const $dom = cheerio.load(collegesContactInfo.data)
			const $table = $dom('.table').children('tbody').children('tr')
			$table.each((_index, $el) => {
				// eq(3) choses the element index in the DOM snapshot
				const email = $dom($el).children().eq(3).text().trim()
				let link = { ...links, email }
				collegeContact.push(link)
			})

		})

		return collegeContact
	} catch (error) {
		console.log(error)
	}
}
const main = async () => {
	const KENYAN_TERTIARY_COLLEGES_URL = 'https://studyinkenya.co.ke/telephone-contacts-of-universities-and-colleges-in-kenya'
	let totalPagecount = 9
	let currentPage = 1

	console.log('Fetching...');
	async function batchFetchInfo(links = []) {

		try {

			do {
				const res = await fetchCollegeContact(KENYAN_TERTIARY_COLLEGES_URL, '', currentPage)
				links.push(res)
				totalPagecount--
				currentPage++
			} while (totalPagecount !== 0);
			return links
		} catch (error) {

		}
	}
	const links = await batchFetchInfo()
	fs.writeFile('./colleges.json', JSON.stringify({ links }, null, 2))
	// const xlsx = xlxsJson(JSON.stringify({...links }, null, 2))
	// fs.writeFileSync('data.xlsx', xlsx, 'binary');


}

main()
	.catch(err => console.log(err))