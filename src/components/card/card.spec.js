import Card from './card.svelte';
import { mount } from 'cypress-svelte-unit-test';

const mockCard = {
    picture: 'https://dyn-images.triplemint.com/production/images/unit/2858709/x486/unit_2858709_0.jpeg',
    address: '160 W End Ave #2-P',
    neighborhood: 'Lincoln Square, Manhattan',
    price: 975000,
    summary: '1 BD, 1 BA, 969 SF, co-op',
    openhouse: '07/19 - 01:00 pm - 02:30 pm',
    timestamp: 1595003838763
};

it('test card component', () => {
    mount(Card, {
        props: { ...mockCard }
    });

    // check for open house banner
    if (mockCard.openhouse) {
        cy.get('.open-house').contains(mockCard.openhouse);
    }

    // check for floor plan image
    if (mockCard.showplan && mockCard.floorplan) {
        cy.get('.thumbnail').find('img').should('have.attr', 'src', mockCard.floorplan);
    }

    // check for picture
    if (!mockCard.showplan && !mockCard.floorplan) {
        cy.get('.thumbnail').find('img').should('have.attr', 'src', mockCard.picture);
    }

    // check for banner when no floor plan available (should not be hardcoded, but for the example it is)
    if (mockCard.showplan && !mockCard.floorplan) {
        cy.get('.no-floor-plans').contains('no floorplan available');
    }

    // check card default copy
    cy.get('.address').contains(mockCard.address);
    cy.get('.neighborhood').contains(mockCard.neighborhood);
    cy.get('.price').contains(`$${mockCard.price.toLocaleString()}`);
    cy.get('.summary').contains(mockCard.summary);

    // check for buttons
    cy.get('.favorite').should('be.exist');
});
