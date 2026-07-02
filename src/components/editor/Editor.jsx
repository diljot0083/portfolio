import React from 'react';
import Typing from '../typing/Typing';

const Editor = () => {
  return (
    <div
      className="editor-float w-[90vw] max-w-[500px] h-[320px] md:w-[570px] md:h-[320px] md:mr-20 mt-7 px-5 py-5 bg-[var(--card-bg)] font-mono text-[var(--editor-text)] shadow-2xl box-border rounded-xl border border-[var(--card-border)] transition-colors duration-300"
    >
      <div className="whitespace-pre-wrap text-xs md:text-sm leading-relaxed break-words">
        <Typing
          message={`#include <iostream>
using namespace std;

int main() {
    string name = "Diljot Singh";
    string role = "Aspiring Software Developer";
    string skills[] = {"C", "C++", "Python", "MERN Stack"};

    cout << "Hello, I'm " << name << ", " << role << endl;
    return 0;
}`}
        />
      </div>
    </div>
  );
};

export default Editor;