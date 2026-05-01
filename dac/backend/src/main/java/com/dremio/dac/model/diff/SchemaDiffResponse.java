package com.dremio.dac.model.diff;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.immutables.value.Value;
import java.util.List;

@Value.Immutable
public interface SchemaDiffResponse {
  @Value.Immutable
  interface ColumnChange {
    @JsonProperty("name") String getName();
    @JsonProperty("fromType") String getFromType();
    @JsonProperty("toType") String getToType();
    @JsonProperty("changeType") String getChangeType();
  }

  @JsonProperty("hasChanges") boolean getHasChanges();
  @JsonProperty("changes") List<ColumnChange> getChanges();
}