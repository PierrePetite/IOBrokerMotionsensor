<xml xmlns="https://developers.google.com/blockly/xml">
  <block type="on_ext" id="Cm7}PW8NrL,z1]o_L8Db" x="-538" y="-538">
    <mutation xmlns="http://www.w3.org/1999/xhtml" items="1"></mutation>
    <field name="CONDITION">ne</field>
    <field name="ACK_CONDITION"></field>
    <value name="OID0">
      <shadow type="field_oid" id="i1NUY{SC0y=+.HL~Dbk]">
        <field name="oid">deconz.0.Sensors.14.presence</field>
      </shadow>
    </value>
    <statement name="STATEMENT">
      <block type="controls_if" id="2YitGl894BZW|0:9o2!h">
        <value name="IF0">
          <block type="logic_compare" id="x%*b0U8;Lj*RM6z83*Co">
            <field name="OP">EQ</field>
            <value name="A">
              <block type="get_value" id="Sr]Pt:4/vVs0Nom^co1]">
                <field name="ATTR">val</field>
                <field name="OID">deconz.0.Sensors.14.presence</field>
              </block>
            </value>
            <value name="B">
              <block type="logic_boolean" id="7z@,{Nh6oA|r%dZK%lr#">
                <field name="BOOL">TRUE</field>
              </block>
            </value>
          </block>
        </value>
        <statement name="DO0">
          <block type="control" id="2N$[E8=F*x$=r~.@n6z7">
            <mutation xmlns="http://www.w3.org/1999/xhtml" delay_input="false"></mutation>
            <field name="OID">hue.0.Flur.level</field>
            <field name="WITH_DELAY">FALSE</field>
            <value name="VALUE">
              <block type="text" id="IaQ;Fz~ssAvyeFxL@VfY">
                <field name="TEXT">1</field>
              </block>
            </value>
          </block>
        </statement>
        <next>
          <block type="controls_if" id=";9Chn@:hr`=::LxW!/b`">
            <value name="IF0">
              <block type="logic_compare" id="bo^Qn5BU$6o!.Ll!KPun">
                <field name="OP">EQ</field>
                <value name="A">
                  <block type="get_value" id="r~7Z{3iR}qy_0Wc~8iWD">
                    <field name="ATTR">val</field>
                    <field name="OID">deconz.0.Sensors.14.presence</field>
                  </block>
                </value>
                <value name="B">
                  <block type="logic_boolean" id="=(I+YWRDGq]ZLGWc_cAb">
                    <field name="BOOL">FALSE</field>
                  </block>
                </value>
              </block>
            </value>
            <statement name="DO0">
              <block type="control" id="!,Ec-eP:Yfo|e,W;9FQR">
                <mutation xmlns="http://www.w3.org/1999/xhtml" delay_input="false"></mutation>
                <field name="OID">hue.0.Flur.on</field>
                <field name="WITH_DELAY">FALSE</field>
                <value name="VALUE">
                  <block type="logic_boolean" id="O9rC#ObDVE4A~+n3v`qM">
                    <field name="BOOL">FALSE</field>
                  </block>
                </value>
              </block>
            </statement>
          </block>
        </next>
      </block>
    </statement>
  </block>
</xml>
