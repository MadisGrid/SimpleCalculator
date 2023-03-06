package madiscalculator;

import javafx.stage.Stage;
/*
 * Application.java
 * A basic program to hold the main and start my Calculator program (Run calculator application)
 *
 * @author Madi Clark
 * Last Modified: February 22, 2023
 * Version: 1.0
 */

public class Application extends Calculator {
	//Main method
	public static void main(String[] args) {
		launch(args);
	}

	@Override
	public void start(Stage primaryStage) { //starts the application
		Calculator calculator = new Calculator();
		try {
			calculator.start(primaryStage);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
