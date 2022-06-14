project(sorting_algorithm_visualiser)
cmake_minimum_required(VERSION 3.11.0)

set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_EXPORT_COMPILE_COMMANDS ON)

set(EXE_NAME sort_alg_vis)

# find_package hackery, config .cmake modules are more modern/ more likely to export targets.
# set(CMAKE_MODULE_PATH "${CMAKE_SOURCE_DIR}/cmake_modules;${CMAKE_MODULE_PATH}")
find_package(SFML COMPONENTS window graphics system CONFIG REQUIRED)

add_executable(${EXE_NAME}
    src/main.cpp
)
target_link_libraries(${EXE_NAME} PRIVATE sfml-window sfml-graphics sfml-system)