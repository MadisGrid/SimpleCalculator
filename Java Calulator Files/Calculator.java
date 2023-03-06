package madiscalculator;

import javafx.application.Application;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.geometry.Insets;
import javafx.geometry.Pos;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.TextField;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.GridPane;
import javafx.scene.layout.HBox;
import javafx.stage.Stage;

/*
 * Calculator.java
 * A basic calculator program that allows the user to perform simple arithmetic
 * operations on two numbers.
 *
 * @author Madi Clark
 * Last Modified: February 22, 2023
 * Version: 1.0
 */

public class Calculator extends Application {
	// Array to hold button label strings
	String[] buttonLabels = { "7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+" };

	// Array to hold button objects
	Button[] buttons = new Button[buttonLabels.length];

	// Variables to keep track of computation
	int result = 0;
	char previousOperator = ' ';
	String inputString = "0";

	// Text field to display the number and result
	TextField display;

	// CalculatorButtonsHandler Listener class to handle button clicks
	class CalculatorButtonsHandler implements EventHandler<ActionEvent> {
		@Override
		public void handle(ActionEvent e) {
			String buttonLabel = ((Button) e.getSource()).getText();
			switch (buttonLabel) {
			case "C":
				result = 0;
				inputString = "0";
				previousOperator = ' ';
				display.setText(inputString);
				break;
			case "+":
			case "-":
			case "*":
			case "/":
			case "=":
				compute();
				if (buttonLabel.equals("=")) {
					previousOperator = ' ';
				} else {
					previousOperator = buttonLabel.charAt(0);
				}
				inputString = "0";
				break;
			default:
				if (inputString.equals("0")) {
					inputString = buttonLabel;
				} else {
					inputString += buttonLabel;
				}
				display.setText(inputString);
				if (previousOperator == '=') {
					result = 0;
					previousOperator = ' ';
				}
				break;
			}
		}
	}

	// Method to handle calculator computations
	private void compute() {
		int inputNum = Integer.parseInt(inputString);
		inputString = "0";
		switch (previousOperator) {
		case '+':
			result += inputNum;
			break;
		case '-':
			result -= inputNum;
			break;
		case '*':
			result *= inputNum;
			break;
		case '/':
			result /= inputNum;
			break;
		default:
			result = inputNum;
			break;
		}
		display.setText(Integer.toString(result));
	}

	@Override
	public void start(Stage arg0) throws Exception {
		// Create GridPane to place all buttons needed for the Calculator
		display = new TextField("0");
		GridPane grid = new GridPane();
		grid.setPadding(new Insets(10, 10, 10, 10));
		grid.setHgap(10);
		grid.setVgap(10);
		grid.setAlignment(Pos.CENTER); // Add this line to center the buttons

		// Create CalculatorButtonsHandler object to handle button clicks
		CalculatorButtonsHandler handler = new CalculatorButtonsHandler();

		// Create buttons and add them to the grid
		for (int i = 0; i < buttonLabels.length; i++) {
			buttons[i] = new Button(buttonLabels[i]);
			buttons[i].setOnAction(handler);
			buttons[i].setPrefSize(50, 50); // set preferred size of each button
			grid.add(buttons[i], i % 4, i / 4);
		}

		// Use Border Pane to place textField at the top and the Grid of buttons in the
		// center
		BorderPane borderPane = new BorderPane();
		borderPane.setTop(borderPaneTop(display));
		borderPane.setCenter(grid);

		// Create Scene and set it to the Stage
		Scene scene = new Scene(borderPane, 300, 400);
		arg0.setTitle("Calculator");
		arg0.setScene(scene);
		arg0.show();
	}

	private HBox borderPaneTop(TextField display) {
		HBox hbox = new HBox();
		hbox.setPadding(new Insets(15, 12, 15, 12));
		hbox.setSpacing(10);
		hbox.setAlignment(Pos.CENTER);

		display.setEditable(false);
		display.setPrefHeight(50);
		hbox.getChildren().addAll(display);

		return hbox;
	}
}
