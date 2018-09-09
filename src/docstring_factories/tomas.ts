import * as interfaces from '../docstring_parts';
import { BaseFactory } from './base_factory'
import * as vscode from 'vscode';

export class TomasFactory extends BaseFactory {

    generateSummary(docstring: interfaces.DocstringParts){
        if (this._includeName) {
            this._snippet.appendText(`${docstring.name} `);
        }
        this._snippet.appendPlaceholder("[summary]");
        this.appendNewLine();
    }

    generateDescription() {}

    formatDecorators(decorators: interfaces.Decorator[]) {}

    formatArguments(docstring: interfaces.DocstringParts) {
        if (docstring.args.length > 0 || docstring.kwargs.length > 0) {
            this.appendText("\nArguments:\n\t");
            this.appendPlaceholder("[argument]")
            this.appendText(": ");
            this.appendPlaceholder("[description]");     
            this.appendNewLine();       
        }
    }

    formatKeywordArguments(docstring: interfaces.DocstringParts) {}

    formatRaises(raises: interfaces.Raises[]) {}

    formatReturns(returns: interfaces.Returns) {}

}
