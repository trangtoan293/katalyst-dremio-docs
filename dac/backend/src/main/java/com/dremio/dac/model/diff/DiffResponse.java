package com.dremio.dac.model.diff;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.immutables.value.Value;

@Value.Immutable
public interface DiffResponse {
  @JsonProperty("fromHash") String getFromHash();
  @JsonProperty("toHash") String getToHash();
  @JsonProperty("schemaDiff") SchemaDiffResponse getSchemaDiff();
  @JsonProperty("dataDiff") DataDiffResponse getDataDiff();
}
