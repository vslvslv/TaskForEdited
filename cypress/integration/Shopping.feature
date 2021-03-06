Feature: Shopping scenarios

    In this feature our goal is to implement a simple happy path for adding a single product to cart on "shop.mango.com"

    Background:
        Given page is loaded
        And cookies are accepted
        And "English" is selected
        Given select "Home" from Navigation
        And select "Candles and aromas" section
        When select "Scented candle Mandarin Basil" product

    Scenario: Product details validation
        Then verify product attributes
            | Price | лв.35.99      |
            | Color | Pastel Orange |
            | Size  | 180gr         |

    Scenario: Product validation in Shopping Bag
        And press Add to shopping cart on Product page
        And press Open Shopping bag button on pop-up dialog
        Then the following item info should be displayed
            | Amount | Qty.: 1       |
            | Size   | 180gr         |
            | Color  | Pastel Orange |

