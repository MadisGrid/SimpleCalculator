
/**
 * 
 */
/**
 * @author aesth
 *
 */
module Madis_Calculator_SER {
	requires javafx.base;
	requires javafx.graphics;
	requires javafx.controls;
    requires javafx.fxml;

    opens madiscalculator to javafx.fxml;
    exports madiscalculator;
}
