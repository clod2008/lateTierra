export const brandData = {
    brandName:  'Late Tierra',
    adress: {
        street: 'Nombre de la Calle',
        number: '44444',
        flord: '14',
        unit: '077',
        city: 'CABA',
        state: 'Buenos Aires',
        country: 'Argentina'
    },
    telephone: '5491132556385',
    whatsapp: '5491132556385',
    mail: 'mail@sitio.com.ar',

}

const adressBlock = `
    ${brandData.adress.street} ${brandData.adress.number}<br>
    ${brandData.adress.city}, ${brandData.adress.state}, ${brandData.adress.country} 
`;

console.log(adressBlock)