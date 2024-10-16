Feature: KasirAJA Category Test

    @test @negative
    Scenario: add category with no fill field
        Given I open KasirAJA website
        When I login with valid credential
        And I select category tab
        And I click add button
        And I click save button
        Then I see an alert message
    
    @test @positive
    Scenario: add category with fill field
        Given I select category tab
        When I click add button
        And I fill field
        And I click save button
        Then I should see pop up success message