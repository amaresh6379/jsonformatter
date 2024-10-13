# JSON Formatter Tool

**JSON Formatter** is a lightweight and easy-to-use tool that formats JSON data for readability. It also provides additional functionalities, such as counting the number of characters in the JSON and splitting large JSON files into smaller parts for easy insertion into Excel cells. Excel has a character limit per cell, and this tool helps manage large JSON data for that purpose.

## Features

- **Pretty Print JSON:** Formats the input JSON into a human-readable structure with proper indentation.
- **Character Count:** Displays the total number of characters in the JSON input.
- **JSON Splitter:** Splits large JSON data into smaller sections for easy pasting into Excel cells, respecting Excel's character limit per cell (32,767 characters).

## Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/amaresh6379/jsonformatter.git
    ```

2. Navigate to the project directory:

    ```bash
    cd jsonformatter
    ```

3. Install the required dependencies:

    ```bash
    npm install
    ```

## Usage

### 1. Formatting JSON

The tool formats any valid JSON input into a readable format.

#### Example Input

```json
{"name":"John","age":30,"city":"New York"}
