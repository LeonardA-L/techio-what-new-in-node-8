// Instanciating a Buffer with Buffer.alloc(num)
const buffer1 = Buffer.alloc(10); // Should run fine
// Instanciating a Buffer with the Buffer(num) constructor
const buffer2 = Buffer(10);       // Should emit a DeprecationWarning warning
