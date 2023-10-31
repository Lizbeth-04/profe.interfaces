//
//  ContentView.swift
//  interfaces
//
//  Created by Lizbeth Encalada on 25/10/23.
//

import SwiftUI

struct ContentView: View {
    @Binding var document: interfacesDocument

    var body: some View {
        TextEditor(text: $document.text)
    }
}

#Preview {
    ContentView(document: .constant(interfacesDocument()))
}
