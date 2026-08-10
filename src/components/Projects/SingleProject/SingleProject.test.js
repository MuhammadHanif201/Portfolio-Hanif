import { render, screen } from '@testing-library/react'
import SingleProject from './SingleProject'

const theme = {
    primary: '#3fc337',
    primary400: '#57d750',
    primary50: '#3fc33780',
    secondary: '#EAEAEA',
    secondary70: '#EAEAEAb3',
    tertiary: '#212121',
    tertiary80: '#212121cc',
}

test('renders a polished project card with visible action and tags', () => {
    render(
        <SingleProject
            id={1}
            name='Veriport'
            desc='Lab-testing compliance platform.'
            tags={['Django', 'Vue.js']}
            demo='https://dashboard.veriport.app/'
            demoLabel='dashboard.veriport.app'
            image='https://example.com/project.png'
            theme={theme}
        />
    )

    expect(
        screen.getByRole('link', { name: /view dashboard\.veriport\.app/i }).getAttribute('href')
    ).toBe('https://dashboard.veriport.app/')
    expect(screen.getByRole('list', { name: /veriport technologies/i })).not.toBeNull()
    expect(screen.getAllByRole('listitem')).toHaveLength(2)
})
