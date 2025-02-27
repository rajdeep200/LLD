import * as readline from "readline";

interface IButton {
  click(): void;
}

interface ITextBox {
  setText(text: string): void;
}

class WinButton implements IButton {
  click(): void {
    console.log("Windows Button clicked");
  }
}

class MacButton implements IButton {
  click(): void {
    console.log("Mac Button clicked");
  }
}

class WinTextBox implements ITextBox {
  setText(text: string): void {
    console.log(`Windows Text Box: ${text}`);
  }
}

class MacTextBox implements ITextBox {
  setText(text: string): void {
    console.log(`Mac Text Box: ${text}`);
  }
}

interface IFactory {
  createButton(): IButton;
  createTextBox(): ITextBox;
}

class WinFactory implements IFactory {
  createButton(): IButton {
    return new WinButton();
  }
  createTextBox(): ITextBox {
    return new WinTextBox();
  }
}

class MacFactory implements IFactory {
  createButton(): IButton {
    return new MacButton();
  }

  createTextBox(): ITextBox {
    return new MacTextBox();
  }
}

class MainFactory {
  private static registry: Record<string, IFactory> = {}
  static registerFactory(os:string, factory:IFactory) {
    this.registry[os.toLowerCase()] = factory;
  }
  static createFactory(os: string): IFactory | null {
    switch (os) {
      case "windows":
        return new WinFactory();
      case "mac":
        return new MacFactory();

      default:
        return null;
    }

    // return this.registry[os.toLowerCase()] || null;
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter OS :: ", (os) => {
  const osFactory = MainFactory.createFactory(os);
  if (osFactory) {
    const osBtn = osFactory.createButton();
    const osTextBox = osFactory.createTextBox();
    osBtn.click();
    osTextBox.setText("Hello World");
  }else {
    console.log('Unknown OS: ' + os);
  }
  rl.close();
});
