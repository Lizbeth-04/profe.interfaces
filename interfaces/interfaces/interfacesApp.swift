//
//  interfacesApp.swift
//  interfaces
//
//  Created by Lizbeth Encalada on 25/10/23.
//

import SwiftUI

@main
struct interfacesApp: App {
    var body: some Scene {
        DocumentGroup(newDocument: interfacesDocument()) { file in
            ContentView(document: file.$document)
        }
    }
}
