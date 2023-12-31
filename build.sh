npm config set registry "http://registry.npmjs.org/"
export CI=false
npm install
# Check if the directory exists
if [ -d "build" ]; then
    echo "Removing directory: build"
    rm -rf "build"
else
    echo "Directory does not exist: $directoryPath"
fi

if [ -d "./server/build" ]; then
    echo "Removing directory: build"
    rm -rf "./server/build"
else
    echo "Directory does not exist: $directoryPath"
fi

npm run build
mv build ./server
cd server
npm install
nohup npm start > /dev/null 2>&1 &