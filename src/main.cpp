#include <vector>
#include <iostream>
#include <random>

#include <SFML/Graphics.hpp>
#include <SFML/System.hpp>

void keyhandler(sf::RenderWindow& window, sf::Event& event) {
    switch(event.key.code) {
        case sf::Keyboard::Escape:
            window.close();
        case sf::Keyboard::R:
            run_algorithm(window);
    }
}

void run_algorithm(sf::RenderWindow& window) {
    // generate a random list, sort it and render the process.
    std::vector<sf::RectangleShape> bars;
    std::cout << "got R" << std::endl;
}

int main()
{
    sf::RectangleShape rect(sf::Vector2f(10.0f, 100.0f));
    rect.setPosition(sf::Vector2f(50.0f, 50.0f));
    sf::RenderWindow window(sf::VideoMode(1000, 1000), "Algorithm Visualiser");
    window.getSize();
    while(window.isOpen())
    {
        sf::Event event;
        while (window.pollEvent(event))
        {
            switch(event.type) {
                case sf::Event::Closed:
                    window.close();
                case sf::Event::KeyPressed:
                    keyhandler(window, event);
            }
        }
        window.clear();
        window.draw(rect);
        window.display();
    }
    return 0;
}