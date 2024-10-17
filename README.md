# Puck Issue Reproduction

This is a reproduction repo for a ticket I filed with [Puck](https://github.com/measuredco/puck/issues/658).

## Running the repro
```shell
# Install dependencies
npm install

# Start local database
npm run docker:start

# Seed local database
npm run prisma:seed

# Start the server
npm run dev
```

Navigate to [https://localhost:5173/edit](https://localhost:5173/edit), drag the component "RichTextEditor" to the middle of the screen, and then click on the "RichTextEditor" component.
You can enter some text, and press "Opslaan" ("save"). The page should then throw an error.
