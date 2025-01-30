#include <iostream>

class MyClass{
  public:
    void printHello(){
    std::cout << "Hello, World!" << std::endl;
    }
};

int main(int argc, char **argv){
  MyClass obj;
  obj.printHello();
  return 0;
}