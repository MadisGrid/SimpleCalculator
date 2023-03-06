
/**
 * 
 */
/**
 * @author aesth
 *
 */
module SER_216_ExtraCredit {
	requires javafx.base;
	requires javafx.graphics;
	requires javafx.controls;
    requires javafx.fxml;

    opens madiscalculator to javafx.fxml;
    exports madiscalculator;
}