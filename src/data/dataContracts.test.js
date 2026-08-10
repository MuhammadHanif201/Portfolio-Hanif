import { contactsData } from './contactsData'
import { experienceData } from './experienceData'
import { headerData } from './headerData'
import { servicesData } from './servicesData'

test('keeps the legacy data contract used by existing components', () => {
    expect(headerData.desciption).toBeTruthy()
    expect(Array.isArray(servicesData)).toBe(true)
    expect(servicesData.length).toBeGreaterThan(0)

    expect(contactsData).toEqual(
        expect.objectContaining({
            email: expect.any(String),
            phone: expect.any(String),
            address: expect.any(String),
        })
    )

    expect(experienceData[0]).toEqual(
        expect.objectContaining({
            id: expect.any(Number),
            company: expect.any(String),
            jobtitle: expect.any(String),
            startYear: expect.any(String),
            endYear: expect.any(String),
        })
    )
})
